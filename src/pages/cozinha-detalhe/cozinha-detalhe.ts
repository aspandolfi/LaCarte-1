import { Notification } from 'rxjs/Rx';
import { state } from '@angular/core/src/animation/dsl';
import { Platform } from 'ionic-angular/es2015';
import { ItemPedido } from "./../../class/ItemPedido";
import { Produto } from "./../../class/produtos";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { AlertController} from "ionic-angular";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ComandaPage } from '../comanda/comanda';


@IonicPage()
@Component({
  selector: "page-cozinha-detalhe",
  templateUrl: "cozinha-detalhe.html"
})
export class CozinhaDetalhePage {
  public itemPedido: ItemPedido;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
    public events: Events,
    private localNotification: LocalNotifications,
    private plt: Platform

  ) {
    this.itemPedido = navParams.data;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CozinhaDetalhePage");
  }

  isUndefined(val:any):boolean{
    return (typeof val === 'undefined');
  }

  temAdicional():boolean{
    if(!this.isUndefined(this.itemPedido.produto.adicional)){
      for(let i=0; i < this.itemPedido.produto.adicional.length; i++){
        if(this.itemPedido.produto.adicional[i].quantidade !== 0){
          return true;
        }
      }
      return false;
    }
  }

  recusar() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Motivo do cancelamento");
    alert.addInput({ type: "radio", label: "Produto incompleto", value: "Produto incompleto", checked: true });
    alert.addInput({ type: "radio", label: "Adicional em falta", value: "Adicional em falta", checked: false });
    alert.addInput({ type: "radio", label: "Equipamento para o preparo com defeito", value: "Equipamento para o preparo com defeito", checked: false });
    alert.addInput({ type: "radio", label: "Outro", value: "Outro", checked: false });
    alert.addButton("Cancel");
    alert.addButton({
      text: "OK",
      handler: data => {
        this.moveTo(2, data); //2 eh status de cancelado
        this.scheduleNotification(); // Notificações Locais
      }
    });
    alert.present();
  }

  confirmar() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Tempo Estimado");
    alert.addInput({ type: "radio", label: "10", value: "10", checked: true });
    alert.addInput({ type: "radio", label: "20", value: "20", checked: false });
    alert.addInput({ type: "radio", label: "30", value: "30", checked: false });
    alert.addInput({ type: "radio", label: "40", value: "40", checked: false });
    alert.addInput({ type: "radio", label: "50", value: "50", checked: false });
    alert.addInput({ type: "radio", label: "60", value: "60", checked: false });
    alert.addButton("Cancel");
    alert.addButton({
      text: "OK",
      handler: data => {
        this.moveTo(1, data); //1 eh status de aceito
        this.scheduleNotification(); // Notificações Locais
      }
    });
    alert.present();
  }

  moveTo(op: number, val: any) {
    let objeto = { val: op, id: this.itemPedido.id, resposta: val }; // val n devia receber o value em vez do id?
    this.events.publish('atualizarItemStatus', objeto);
    this.navCtrl.pop();
  }

  scheduleNotification(){
    this.localNotification.schedule({
      id: 1,
      title: 'Pedido Respondido',
      text: 'Seu pedido foi respondido! Por favor verifique a comanda.',
      data: { mydata: 'Minha mensagem oucuta é essa' },
      at: new Date(new Date().getTime() + 5 * 1000)
    });
    this.navCtrl.setRoot(ComandaPage);
  }

}



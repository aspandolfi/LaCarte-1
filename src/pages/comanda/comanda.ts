import { DetalhePedidoPage } from './../detalhe-pedido/detalhe-pedido';
//Modulos
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from "@ionic/storage";
//classes
import { Comanda } from '../../class/ItemComanda';
import { ItemPedido } from '../../class/ItemPedido';


@IonicPage()
@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html',
})
export class ComandaPage {
  public comanda: Comanda = new Comanda;
  public cozinha: Comanda = new Comanda;
  public total: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public events: Events
  ) {
    this.loadComanda().then(() => {
      this.calcularTotal();
    });

    events.subscribe('apagarItemComanda',(data: ItemPedido) => {
      this.removeItem(data);
    });
  }

  async loadComanda(){
    await this.storage.get("comanda")
      .then((data:Comanda)=>{
        this.comanda = new Comanda();
        this.comanda.pedido = new Array<ItemPedido>();
        if(data){ // Se já tem conteudo
          this.comanda.id = data.id;
          this.comanda.pedido = this.comanda.pedido.concat(data.pedido);
          this.comanda.mesa = data.mesa;
        }
        this.storage.set("comanda", this.comanda);
      }
    );
  }

  calcularTotal(){
    this.total = 0;
    for(let i = 0; i < this.comanda.pedido.length; i++){
      if(this.comanda.pedido[i].status !== 2){
        this.total += this.comanda.pedido[i].valor;
      }
    }
  }

  public removeItem(item: any) {
    this.comanda.pedido = this.comanda.pedido.filter(itemNaLista => {
      return itemNaLista.id !== item.id;
    });
    this.storage.set("comanda", this.comanda);
    this.calcularTotal();
  }

  returnStatusIcon(statusNum:number, deviceNum:number):string{
    let statusTxt:string = "";
    //Prefixo
    if(deviceNum == 1) statusTxt = statusTxt.concat("md-");
    if(deviceNum == 2) statusTxt = statusTxt.concat("ios-");
    //Sufixo
    if(statusNum == 0) statusTxt = statusTxt.concat("time");
    if(statusNum == 1) statusTxt = statusTxt.concat("checkmark");
    if(statusNum == 2) statusTxt = statusTxt.concat("close");

    return statusTxt;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComandaPage');
  }

  detalhe(item:any){
    this.navCtrl.push(DetalhePedidoPage, {itemPedido:item, op:2});
  }

}

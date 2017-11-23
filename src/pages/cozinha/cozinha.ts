import { CozinhaDetalhePage } from './../cozinha-detalhe/cozinha-detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Comanda } from '../../class/ItemComanda';
import { Storage } from "@ionic/storage";
import { ItemPedido } from '../../class/ItemPedido';


@IonicPage()
@Component({
  selector: 'page-cozinha',
  templateUrl: 'cozinha.html',
})
export class CozinhaPage {
  public comanda: Comanda = new Comanda;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public events: Events
  ) {
    this.loadComanda();

    events.subscribe('atualizarItemStatus', (data) => {
      this.loadComanda().then(()=> {
        this.changeStatus(data);
        this.storage.set("comanda",this.comanda);
      });
    });
  }

  changeStatus(data:any){
    let pos:number = this.getItemPos(data.id);
    let value:number = data.val;
    this.comanda.pedido[pos].status = value;
    this.comanda.pedido[pos].respostaCozinha = data.resposta;
  }

  public getItemPos(id: number):number {
    for (let i = 0; i < this.comanda.pedido.length; i++) {
      if (this.comanda.pedido[i].id === id) {
        return i;
      }
    }
    return null;
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
        for(let i = 0; i < this.comanda.pedido.length; i++){
          this.comanda.pedido = this.comanda.pedido.filter(itemNaLista => {
            return itemNaLista.status === 0;
          });
        }
        this.storage.set("comanda", this.comanda);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CozinhaPage');
  }

  public moveTo(item:any){
    this.navCtrl.push(CozinhaDetalhePage, item);
  }

}

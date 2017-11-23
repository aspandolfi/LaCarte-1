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
  public cozinha: Comanda = new Comanda;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public events: Events
  ) {
    this.loadComanda().then(() => {
      this.loadCozinha();
      // console.log("CARREGOU 1");
    });

    events.subscribe('atualizarItemStatus', (data) => {
      // console.log("CARREGOU 2");
      this.loadComanda().then(()=> {
        this.changeStatus(this.comanda, data);
        this.changeStatus(this.cozinha, data);
        this.updateComanda();
        this.updateCozinha();
      });
    });
  }

  changeStatus(lst:Comanda, data:any){
    let pos:number = this.getItemPos(lst, data.id);
    let value:number = data.val;
    lst.pedido[pos].status = value;
    lst.pedido[pos].respostaCozinha = data.resposta;
  }

  public getItemPos(lst:Comanda, id: number):number {
    for (let i = 0; i < lst.pedido.length; i++) {
      if (lst.pedido[i].id === id) {
        return i;
      }
    }
    return null;
  }

  async loadComanda(){
    await this.storage.get("comanda").then((data:Comanda)=>{
        this.comanda = data;
    });
  }

  async loadCozinha(){
    await this.storage.get("comandaCozinha")
      .then((data:Comanda)=>{
        this.cozinha = new Comanda();
        this.cozinha.id = 1;
        for(let i = 0; i < this.comanda.pedido.length; i++){
          this.cozinha.pedido = this.comanda.pedido.filter(itemNaLista => {
            return itemNaLista.status === 0;
          });
        }
        if(data){
          this.cozinha.id = data.id;
          this.cozinha.pedido = data.pedido;
          this.cozinha.mesa = data.mesa;
        }
      }
    );
  }
async verificaStatus(){
  this.cozinha.pedido = this.comanda.pedido.filter(itemNaLista => {
    return itemNaLista.status === 0;
  });
}
  async updateCozinha(){
    await this.verificaStatus();
    await this.storage.set("comandaCozinha", this.cozinha);
  }

  updateComanda(){
    this.storage.set("comanda",this.comanda);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CozinhaPage');
  }

  public moveTo(item:any){
    this.navCtrl.push(CozinhaDetalhePage, item);
  }

}

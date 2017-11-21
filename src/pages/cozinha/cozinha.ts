import { CozinhaDetalhePage } from './../cozinha-detalhe/cozinha-detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public storage: Storage
  ) {
    this.loadComanda();
  }

  loadComanda(){
    this.storage.get("comanda")
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CozinhaPage');
  }

  public moveTo(item:any){
    this.navCtrl.push(CozinhaDetalhePage, item);
  }

}

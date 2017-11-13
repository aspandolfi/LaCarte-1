//Modulos
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
//classes
import { ItemComanda } from '../../class/ItemComanda';


@IonicPage()
@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html',
})
export class ComandaPage {
  public carrinho: Array<ItemComanda> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
  ) {
    this.carrinho = navParams.data;
    console.log(this.carrinho);
    this.loadComanda();
  }

  loadComanda(){
    this.storage.get("comanda")
      .then((data:any)=>{
        if(data){ // Se já tem conteudo
          this.carrinho = this.carrinho.concat(data);
          this.saveComanda();
        }
      }
    );
  }

  saveComanda(){
    this.storage.set("comanda", this.carrinho);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComandaPage');
  }

}

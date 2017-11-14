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

  returnStatus(statusNum:number, deviceNum:number):string{
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

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../class/produtos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-cardapio2',
  templateUrl: 'cardapio2.html',
})

export class Cardapio2Page {
  public produto = new Produto();
  public total = 0.0;
  public obs: string;

  public produtos: any;
  public item_pedido_adicional: any;

  adicional = [
    {"id": 1, "nome": "Bacon", "quantidade": 0, "valor": 2},
    {"id": 2, "nome": "Queijo extra", "quantidade": 0, "valor": 1.5},
    {"id": 3, "nome": "Cebola extra", "quantidade": 0, "valor": 1}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get("produto")
      .then((data)=>{
        this.produto = data[(navParams.data)-1];
        this.total = this.produto.valor;
      }
    );
    /*
    this.storage.get("adicional")
      .then((data)=>{
        this.adicional = data;
        this.total = this.produto.valor;
      }
    );
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cardapio2Page');
  }

  public mudaQuantia(adic: any, sinal: number){
    if(adic.quantidade + sinal >= 0){
      adic.quantidade += sinal;
      this.total += sinal * adic.valor;
    }
  }

  public moveTo(total:number){
    console.log("total = ", total);
    this.navCtrl.push(CarrinhoPage, total);
  }

}

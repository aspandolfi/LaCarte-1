import { CardapioListPage } from './../cardapio-list/cardapio-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardapioPage } from '../cardapio/cardapio';
import { RestProvider } from './../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {
  pro={};
  produtoData={"nome": " ", "valor": " "};
  total: any;

  itensPedidos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private rest: RestProvider) {
    this.itensPedidos = navParams.data;
  }

  getData(){
    this.rest.getProduto(1).subscribe(data=>
      {
        console.log(data);
        this.pro = data;
        localStorage.setItem('proData',JSON.stringify(this.pro))
        console.log(localStorage);
      }
    );
  }

  moveTo() {
    this.navCtrl.push(CardapioListPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

}

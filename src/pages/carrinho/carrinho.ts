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

  constructor(public navCtrl: NavController, public navParams: NavParams,private rest: RestProvider) {
    this.getData();
  }
  pro={};
  produtoData={"nome": " ", "valor": " "};
  
  getData(){ // função que permite mostrar na página os produtos do cardápio.
    this.rest.getProduto(1).subscribe(data=>
      {
        console.log(data);
        this.pro = data;
        localStorage.setItem('proData',JSON.stringify(this.pro))
        console.log(localStorage);
      }
    );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

}

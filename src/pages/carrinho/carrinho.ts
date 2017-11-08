import { ComandaPage } from './../comanda/comanda';
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
  public produtoData=[{"nome": "Lasanha", "valor": "10", "url": "http://www.pifpaf.com.br/img/000000000000050138006.JPG"}]
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
  public addItem() {
    this.navCtrl.push(CardapioListPage);
  }

  public moveTo() {
    this.navCtrl.push(ComandaPage);
  }

  public removeItem(){
    this.produtoData = []
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

}

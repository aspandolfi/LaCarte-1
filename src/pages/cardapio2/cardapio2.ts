import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../class/produtos';
import { CarrinhoPage } from '../carrinho/carrinho';

@IonicPage()
@Component({
  selector: 'page-cardapio2',
  templateUrl: 'cardapio2.html',
})

export class Cardapio2Page {
  public produto = new Produto();
  public total = 0.0;
  public obs: string;

  Produto = {
    "nome": "Lasanha", "valor": 16.00, "url": "https://i.imgur.com/Q5ISx1U.jpg", "descricao": "Massa caseira, molho a bolonhesa, presunto, queijo mussarela, molho branco."
  };

  adicionais = [
    {"nome": "Bacon", "id": "1", "quantidade": 0, "valor": 2},
    {"nome": "Queijo extra", "id": "2", "quantidade": 0, "valor": 1.5},
    {"nome": "Cebola extra", "id": "3", "quantidade": 0, "valor": 1}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = navParams.data;
    console.log(this.produto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cardapio2Page');
    this.total = this.Produto.valor;
  }

  public mudaQuantia(adic: any, sinal: number){
    if(adic.quantidade + sinal >= 0){
      adic.quantidade += sinal;
      this.total += sinal * adic.valor;
    }
  }

  public moveTo(total:number){ // uma simples função que esta sendo chamada pela primeira imagem do cardapio para poder visualizar a descrição da comida.
    console.log(total);
    this.navCtrl.push(CarrinhoPage, total);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../class/produtos';

@IonicPage()
@Component({
  selector: 'page-cardapio2',
  templateUrl: 'cardapio2.html',
})
export class Cardapio2Page {
  produto: any;

  Produto = { "name": "Lasanha", "simbolo": "R$", "valor": "16.00", "url": "https://i.imgur.com/Q5ISx1U.jpg", "descricao": "Massa caseira, molho a bolonhesa, presunto, queijo mussarela, molho branco." };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = navParams.data;
    console.log(this.produto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cardapio2Page');
  }
  public moveTo() { // uma simples função que esta sendo chamada pela primeira imagem do cardapio para poder visualizar a descrição da comida.
    this.navCtrl.push(Cardapio2Page)
  }

}

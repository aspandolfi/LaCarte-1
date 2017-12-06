import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cardapio2Page } from '../cardapio2/cardapio2';
import { Platform } from 'ionic-angular';
import { Produto } from '../../class/produtos';
import { RestProvider } from './../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})

export class CardapioPage {

  cardapio: string = "comidas"; //mostra a pagina de comida 

  items = [];

  pro = {}

  private comidas = [
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 }
  ];

  private bebidas = [
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 }
  ];

  private sobremesas = [
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 },
    { urlImage: "#", nome: "A", valor: 10 }
  ];

  produtoData = { "nome": " ", "valor": " " }; // MOC do cardápio
  //Produto={"name": "Lasanha", "valor": "16.00"}; // MOC do cardápio

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private rest: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

  public moveTo() { // uma simples função que esta sendo chamada pela primeira imagem do cardapio para poder visualizar a descrição da comida.
    this.navCtrl.push(Cardapio2Page)
  }

}

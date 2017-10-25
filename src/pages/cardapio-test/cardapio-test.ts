import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the CardapioTestPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapio-test',
  templateUrl: 'cardapio-test.html'
})
export class CardapioTestPage implements OnInit {

  tab: any;

  ngOnInit(): void {

  }

  comidasRoot = 'ComidasPage'
  bebidasRoot = 'BebidasPage'
  sobremesasRoot = 'SobremesasPage'

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.tab = this;
  }

  itens = [
    { nome: "A", urlImage: "sssss", valor: 10 },
    { nome: "A", urlImage: "sssss", valor: 10 },
    { nome: "A", urlImage: "sssss", valor: 10 },
    { nome: "A", urlImage: "sssss", valor: 10 },
    { nome: "A", urlImage: "sssss", valor: 10 },
    { nome: "A", urlImage: "sssss", valor: 10 },
    { nome: "A", urlImage: "sssss", valor: 10 },
  ]

}

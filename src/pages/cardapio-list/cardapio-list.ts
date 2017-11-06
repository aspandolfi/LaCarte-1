import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cardapio2Page } from '../cardapio2/cardapio2';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the CardapioListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapio-list',
  templateUrl: 'cardapio-list.html',
})
export class CardapioListPage {

  selectedItem: any = "comidas";
  myLocation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }

  private comidas = [
    { nome: "Comida 1", urlImage: "xxx", valor: 10 },
    { nome: "Comida 2", urlImage: "xxx", valor: 10 },
    { nome: "Comida 3", urlImage: "xxx", valor: 10 },
    { nome: "Comida 4", urlImage: "xxx", valor: 10 },
    { nome: "Comida 5", urlImage: "xxx", valor: 10 }
  ];

  private bebidas = [
    { nome: "bebidas 1", urlImage: "xxx", valor: 10 },
    { nome: "bebidas2", urlImage: "xxx", valor: 10 },
    { nome: "bebidas3", urlImage: "xxx", valor: 10 },
    { nome: "bebidas4", urlImage: "xxx", valor: 10 },
    { nome: "bebidas5", urlImage: "xxx", valor: 10 }
  ];

  private sobremesas = [
    { nome: "sobremesas1", urlImage: "xxx", valor: 10 },
    { nome: "sobremesas2", urlImage: "xxx", valor: 10 },
    { nome: "sobremesas3", urlImage: "xxx", valor: 10 },
    { nome: "sobremesas4", urlImage: "xxx", valor: 10 },
    { nome: "sobremesas5", urlImage: "xxx", valor: 10 }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioListPage');
  }

  moveTo(item: any) {
    console.log(item);
    this.navCtrl.push(Cardapio2Page, item);
  }

}

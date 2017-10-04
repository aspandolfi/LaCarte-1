import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mesa } from './../../class/Restaurante';

@IonicPage()
@Component({
  selector: 'page-mesa',
  templateUrl: 'mesa.html',
})
export class MesaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesaPage');
  }

}

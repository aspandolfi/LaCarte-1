import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
export class CardapioTestPage {

  comidasRoot = 'ComidasPage'
  bebidasRoot = 'BebidasPage'
  sobremesasRoot = 'SobremesasPage'


  constructor(public navCtrl: NavController) {}

}

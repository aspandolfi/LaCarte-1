import { CozinhaDetalhePage } from './../cozinha-detalhe/cozinha-detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CozinhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cozinha',
  templateUrl: 'cozinha.html',
})
export class CozinhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CozinhaPage');
  }
  public moveTo(){
    this.navCtrl.push(CozinhaDetalhePage);
  }

}

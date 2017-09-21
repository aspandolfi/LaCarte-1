import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//apenas rest sem provider mas da pau?
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	usuarios: string[];
	errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  }

	soontm(){
		alert("Essa opção estará disponível em breve!");
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';


/**
 * Generated class for the CadastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadast',
  templateUrl: 'cadast.html',
})

export class CadastPage {
	dadosUsuario = {
		nome: '',
		email: '',
		telefone: '',
		senha: '',
	};
	
  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, ) {
  }

	/*
	saveUser() {
		this.restapiService.saveUser(this.dadosUsuario).then((result) => {
			console.log(result);
		}, (err) => {
			console.log(err);
		});
	}
*/
  public ionViewDidLoad() {
    console.log('ionViewDidLoad CadastPage');
  }
	public moveTo(){
    this.navCtrl.push(PerfilPage)
  }
}

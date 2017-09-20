import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

import { UsuarioProvider } from '../../providers/usuario/usuario';

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
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider: UsuarioProvider) {
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastPage');
  }

}

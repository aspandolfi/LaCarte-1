import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

import { User } from './../../class/User';
import { RestProvider } from './../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-cadast',
  templateUrl: 'cadast.html',
})

export class CadastPage {
	

	usuarios = {};
	public user = new User();

  constructor(public navCtrl: NavController, private rest: RestProvider) {
		this.rest.getUsers().subscribe((data)=> {
			this.usuarios = data;
		})
	}
	
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastPage');
  }

	public salvar(){
		console.log(this.user);
		this.rest.addUser(this.user);
	}

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';



@IonicPage()
@Component({
  selector: 'page-perfil',
	templateUrl: 'perfil.html',

	//providers:[ UsuarioProvider ]
})

export class PerfilPage {

	usuarios = {};
	constructor(public navCtrl: NavController, private rest: RestProvider) {
			this.rest.getUsers().subscribe((data)=> {
			this.usuarios = data;
		});
	
	}

  ionViewDidLoad() {

  }

}

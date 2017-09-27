import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
//import { UsuarioProvider } from '../../providers/usuario/usuario';

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
		})
	}

	public lista_usuarios = new Array<any>();
	public printHello(txt:string){
		alert(txt);
	}

  ionViewDidLoad() {
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
	templateUrl: 'perfil.html',
	//providers:[ UsuarioProvider ]
})



export class PerfilPage {
	public obj_usuario = {
		nome: "Jose Ninguem",
		cpf: "00000000000",
		telefone: 999999999,
		email: "zeninguem@gmail.com"
}	;
  constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		//private UsuarioProvider: UsuarioProvider
	) {
  }

	public lista_usuarios = new Array<any>();
	public printHello(txt:string){
		alert(txt);
	}

  ionViewDidLoad() {
  }

}

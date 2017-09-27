import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-perfil',
	templateUrl: 'perfil.html',

})

export class PerfilPage {
	public obj_usuario = {
		nome: "Jose",
		sobrenome:"Porcaria",
		cpf: "000.000.000-00",
		telefone: 999999999,
		email: "zeporcaria@gmail.com"
}	;
  constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
	
	) {
  }

	// public lista_usuarios = new Array<any>();
	// public printHello(txt:string){
		// alert(txt);
	// }

  ionViewDidLoad() {
		
  }

}

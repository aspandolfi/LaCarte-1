import { User } from './../../class/User';
import { Component } from '@angular/core';
import { IonicPage, NavController/*, NavParams*/ } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-perfil',
	templateUrl: 'perfil.html',

	//providers:[ UsuarioProvider ]
})

export class PerfilPage {
  user = {};

	constructor(public navCtrl: NavController, private rest: RestProvider) {
    this.getData();
	}

  getData(){
    this.rest.getUser(1).subscribe(data=>
      {
        console.log(data);
        this.user = data;
      }
    );
  }

  ionViewDidLoad() {

  }

}

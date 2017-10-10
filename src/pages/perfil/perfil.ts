import { User } from '../../class/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
import { EditarPage } from '../editar/editar';

@IonicPage()
@Component({
  selector: 'page-perfil',
	templateUrl: 'perfil.html',

	//providers:[ UsuarioProvider ]
})

export class PerfilPage {
  user = {};
  userData = {"name": "","email": "", "telefone": "","cpf": "","senha": "", "id": ""};
  public usuarios = new User();
	constructor(public navCtrl: NavController, private rest: RestProvider, public alertCtrl: AlertController) {
    this.getData();
	}

  getData(){
    this.rest.getUser(1).subscribe(data=>
      {
        console.log(data);
        this.user = data;
        localStorage.setItem('userData',JSON.stringify(this.user))
        console.log(localStorage);
      }
    );
  }

  excluir(){    // Função para alterar dados do usuarios
    console.log(this.user);
    this.rest.deleteUser(this.user);
    this.navCtrl.push(EditarPage);
  }

  mudarPage(){
    this.navCtrl.push(EditarPage);
  }

  ionViewDidLoad() {

  }

}

import { User } from '../../class/User';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
	templateUrl: 'perfil.html',

	//providers:[ UsuarioProvider ]
})

export class PerfilPage {
  user = {};
  userData = {"name": "","email": "", "telefone": "","cpf": "","senha": ""};
	constructor(public navCtrl: NavController, private rest: RestProvider, public alertCtrl: AlertController) {
    this.getData();
	}

  getData(){
    this.rest.getUser(1).subscribe(data=>
      {
        console.log(data);
				this.user = data;
				localStorage.setItem('userData',JSON.stringify(this.user));
        console.log(localStorage);
      }
    );
	}
	
	showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Editar Dados',
      message: "Edite os dados que quiser ou deixe em branco para não haver alterações",
      inputs: [
        {
          name: 'name',
          placeholder: 'Nome'
        },
        {
          name: 'email',
          placeholder: 'Email'
        },
        {
          name: 'tel',
          placeholder: 'Telefone'
        },
        {
          name: 'senha',
          placeholder: 'Senha'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
  }

}

import { User } from '../../class/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
import { EditarPage } from '../editar/editar';

@IonicPage()
@Component({
  selector: 'page-perfil',
	templateUrl: 'perfil.html',
})

export class PerfilPage {

  public user1 = new User();

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
        localStorage.setItem('userData',JSON.stringify(this.user))
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

  mudarPage(){
    this.navCtrl.push(EditarPage);
  }

  excluir(){    // Função para excluir o usuario
    console.log(this.user1.name);
    this.rest.deleteUser(this.user1);
    this.navCtrl.push(EditarPage);
  }
  ionViewDidLoad() {
  }

}
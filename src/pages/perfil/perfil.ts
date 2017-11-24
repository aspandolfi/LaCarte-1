import { User } from '../../class/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { EditarPage } from '../editar/editar';
import { Storage } from '@ionic/storage';
import { Mesa } from '../../class/Restaurante';

@IonicPage()
@Component({
  selector: 'page-perfil',
	templateUrl: 'perfil.html',
})

export class PerfilPage {
  public user:User = new User;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {
    this.storage.get("mesa").then((data:Mesa) => {
      this.user = data.usuario;
    });
	}

  editarPerfil(){ // TODO
    this.navCtrl.push(EditarPage);
  }

  excluirPerfil(){    // TODO: Função para excluir o usuario
    console.log("Excluir perfil");
  }

  ionViewDidLoad() {
  }
}

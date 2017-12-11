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
    //this.storage.get("mesa").then((data:Mesa) => {
    //  this.user = data.usuario;
    //});
    this.user = {avatar: "https://i.imgur.com/EnRkN4K.jpg", telefone: "", senha: "", nome: "", id: 0, email: "", cpf: 100000}
	}

  editarPerfil(){ // TODO
    this.navCtrl.push(EditarPage);
  }

  excluirPerfil(){    // TODO: Função para excluir o usuario
    this.showAlert("","Essa opção estará disponível em breve!");
  }

  showAlert(varT, varS) {
    // alerta para erro de login
    let alert = this.alertCtrl.create({
      title: varT,
      subTitle: (varS),
      buttons: ["OK"]
    });
    alert.present();
  }

  ionViewDidLoad() {
  }
}

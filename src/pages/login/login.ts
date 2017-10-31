import { PerfilPage } from './../perfil/perfil';
import { User } from './../../class/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CadastPage } from '../cadast/cadast';
// import { SqliteServe } from '../../class/SqliteServe';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuarios: string[];
  errorMessage: string;
  public user = {};
  userDetails: any;
  responseData: any;
  public usuarioLogin = new User();
  public data1 = JSON.parse(localStorage.getItem('userData'))
  userData = { "name": "", "email": "", "telefone": "", "cpf": "", "senha": "" }; // apenas pra teste

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, public alertCtrl: AlertController) {
    this.usuarioLogin.email = "";
    this.usuarioLogin.senha = "";
  }

  soontm() {
    alert("Essa opção estará disponível em breve!");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Validar() { //verifica se o usuario se encontra no banco.
    let loading = this.loadingCtrl.create({
      content: 'Fetching content...'
    });

    if (this.usuarioLogin.email === "") {
      console.log(this.usuarioLogin.email)
      this.showAlert();
    } else {
      this.rest.getUserEmail(this.usuarioLogin.email).subscribe(data => {
        loading.present();
        console.log(data);
        this.user = data;
        loading.dismiss();
        localStorage.setItem('userData', JSON.stringify(this.user))
        console.log(localStorage);
      }
      );

      if (this.usuarioLogin.email === this.data1.email && this.usuarioLogin.senha === this.data1.senha) {
        this.showAlertOn();
        this.navCtrl.push(PerfilPage)
      } else {
        this.showAlert();
      }
    }
  }

  getData() {
    this.rest.getUser(1).subscribe(data => {
      console.log(data);
      this.user = data;
      localStorage.setItem('userData', JSON.stringify(this.user))
      console.log(localStorage);
    }
    );
  }

  showAlert() { // alerta para erro de login
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Não foi possivel logar, login ou senha incorreto!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertOn() { // alerta para inicio do uso do app
    let alert = this.alertCtrl.create({
      title: 'La Carte',
      subTitle: 'Bem vindo ao La Carte! Desejamos uma boa refeição!',
      buttons: ['OK']
    });
    alert.present();

  }

  public moveTo() {
    this.navCtrl.push(CadastPage);
  }

}

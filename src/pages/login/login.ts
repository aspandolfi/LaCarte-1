import { PerfilPage } from './../perfil/perfil';
import { User } from './../../class/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//apenas rest sem provider mas da pau?
import { RestProvider } from '../../providers/rest/rest';
import { CadastPage } from '../cadast/cadast';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	usuarios: string[];
	errorMessage: string;
  public user ={};
  userDetails : any;
  responseData: any;
  public usuarioLogin = new User();
  public data1 = JSON.parse(localStorage.getItem('userData'))
  userData = {"name": "","email": "", "telefone": "","cpf": "","senha": ""}; // apenas pra teste

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    this.rest.getUser(1).subscribe(data=>
      {
        console.log(data);
        this.user = data;
        localStorage.setItem('userData', JSON.stringify(this.user)); // APENAS PARA TESTE
        console.log(localStorage);
      }
    );

  }

	soontm(){
		alert("Essa opção estará disponível em breve!");
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Validar(){
    if(this.usuarioLogin.email === this.data1.email && this.usuarioLogin.senha === this.data1.senha){
      this.navCtrl.push(PerfilPage)
    }else{
      alert("nao entrou");
    }
  }

  public moveTo(){
    this.navCtrl.push(CadastPage);
  }

}

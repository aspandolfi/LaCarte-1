import { MesaPage } from '../mesa/mesa';
import { PerfilPage } from "./../perfil/perfil";
import { User } from "./../../class/User";
import { Component } from "@angular/core";
import { IonicPage, LoadingController, MenuController, NavController, NavParams } from 'ionic-angular';
import { AlertController } from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { CadastPage } from "../cadast/cadast";
import { CardapioListPage } from "../cardapio-list/cardapio-list";
import { SplashScreen } from "@ionic-native/splash-screen";
// import { SqliteServe } from '../../class/SqliteServe';
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public user = {};
  public userDetails: any;
  public responseData: any;
  public usuarioLogin = new User();
  public data1: any;
  public userData = { name: "", email: "", telefone: "", cpf: "", senha: "" }; // apenas pra teste
  public usuario = new User(); //TODO: Eh, checa essa bagunça toda de variáveis


  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public alertCtrl: AlertController,
    private menu: MenuController,
    public splashScreen: SplashScreen,
    public storage: Storage
  ) {
    this.splashScreen.show();
    this.usuarioLogin.email = "";
    this.usuarioLogin.senha = "";
    this.usuario = {id: 1, nome: "Fulano", email: "fulano@gmail.com", telefone: "99990000", cpf: 12345678901, senha: "leds123"};
    this.storage.clear(); //TODO: remover isso, só pra teste
    this.storage.set("carrinho",[]);
  }

  presentModal() {
    this.navCtrl.setRoot(CardapioListPage);
  }

  soontm() {
    // TODO: implementar api google e facebook
    let alert = this.alertCtrl.create({
      subTitle: "Essa opção estará disponível em breve!",
      buttons: ["OK"]
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(false);
    console.log("ionViewDidLoad LoginPage");
  }

  Validar() {
    //verifica se o usuario se encontra no banco.
    let loading = this.loadingCtrl.create({
      content: "Fetching content...",
      dismissOnPageChange: true,
      spinner: "dots"
    });
    loading.present();
    this.splashScreen.hide(); //TODO: temporário, modificar(?)
    this.navCtrl.setRoot(MesaPage, this.usuario);

    // if (this.usuarioLogin.email === "" || this.usuarioLogin.senha === "") {
    //   loading.dismiss();
    //   this.showAlert();
    // } else {
    //   this.rest.getUserEmail(this.usuarioLogin.email).subscribe(data => {
    //     this.user = data;
    //     localStorage.setItem("userData", JSON.stringify(this.user));
    //     this.data1 = JSON.parse(localStorage.getItem("userData"));
    //     loading.dismiss();
    //     if (
    //       this.usuarioLogin.email === this.data1.email &&
    //       this.usuarioLogin.senha === this.data1.senha
    //     ) {
    //       this.showAlertOn();
    //       this.navCtrl.setRoot(PerfilPage);
    //     } else {
    //       this.showAlert();
    //     }
    //   }, err => {
    //     loading.dismiss();
    //     this.showAlert();
    //   });
    // }
  }

  getData() {
    this.rest.getUser(1).subscribe(data => {
      // console.log(data);
      this.user = data;
      localStorage.setItem("userData", JSON.stringify(this.user));
      // console.log(localStorage);
    });
  }

  showAlert() {
    // alerta para erro de login
    let alert = this.alertCtrl.create({
      title: "Usuário não encontrado",
      subTitle: "Não foi possível logar, login ou senha incorreto!",
      buttons: ["OK"]
    });
    alert.present();
  }

  showAlertOn() {
    // alerta para inicio do uso do app
    let alert = this.alertCtrl.create({
      title: "La Carte",
      subTitle: "Bem vindo ao La Carte! Desejamos uma boa refeição!",
      buttons: ["OK"]
    });
    alert.present();
  }

  public moveTo() {
    this.navCtrl.push(CadastPage);
  }
}

import { MesaPage } from '../mesa/mesa';
import { User } from "./../../class/User";
import { Component } from "@angular/core";
import { IonicPage, LoadingController, MenuController, NavController, NavParams } from 'ionic-angular';
import { AlertController } from "ionic-angular";
import { CadastPage } from "../cadast/cadast";
import { CardapioListPage } from "../cardapio-list/cardapio-list";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Storage } from "@ionic/storage";
import { ResponseData } from '../../class/ResponseData';
import { UserService } from '../../services/user.service';

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  public usuarioLogin = new User();

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private menu: MenuController,
    public splashScreen: SplashScreen,
    public storage: Storage,
    private service: UserService
  ) {
    this.splashScreen.show();
    this.storage.clear(); //TODO: remover isso, só pra teste
    this.storage.set("carrinho", []);
    this.splashScreen.hide();
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
    let loading = this.loadingCtrl.create({
      content: "Login...",
      dismissOnPageChange: true,
      spinner: "dots"
    });
    loading.present();
    //verifica se o usuario se encontra no banco.
    this.service.doLogin({ email: this.usuarioLogin.email, senha: this.usuarioLogin.senha })
      .subscribe((response: ResponseData) => {
        if (!response.status) {
          let mensagem;
          response.mensagens.forEach(val => mensagem += val);
          this.showAlert(mensagem);
          loading.dismiss();
        }
        else {
          this.storage.set("_token", response.objeto);
          this.navCtrl.setRoot(MesaPage);
        }
      });
  }

  showAlert(mensagem?: string) {
    // alerta para erro de login
    let alert = this.alertCtrl.create({
      title: "Usuário não encontrado",
      subTitle: (mensagem ? mensagem : "Não foi possível logar, login ou senha incorreto!"),
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

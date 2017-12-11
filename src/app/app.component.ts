import { Storage } from '@ionic/storage';
import { PedidosProntosPage } from './../pages/pedidos-prontos/pedidos-prontos';
import { CozinhaPage } from "./../pages/cozinha/cozinha";
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { CadastPage } from "../pages/cadast/cadast";
import { PerfilPage } from "../pages/perfil/perfil";
import { LoginPage } from "../pages/login/login";
// import { EditarPage } from '../pages/editar/editar';
import { MesaPage } from "../pages/mesa/mesa";
import { CardapioPage } from "../pages/cardapio/cardapio";
import { CarrinhoPage } from "../pages/carrinho/carrinho";
import { CardapioListPage } from "../pages/cardapio-list/cardapio-list";
import { ComandaPage } from "../pages/comanda/comanda";
import { AlertController } from "ionic-angular";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "LoginPage";

  pages: Array<{ title: string; component: any, icon: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Logout", component: LoginPage, icon:"log-out" }, //TODO: Fazer logout de verdade
      //{ title: "Perfil", component: PerfilPage, icon:"person" },
      { title: "Cardapio", component: CardapioListPage, icon:"book" },
      { title: "Carrinho", component: CarrinhoPage, icon:"cart" },
      { title: "Comanda", component: ComandaPage, icon:"bookmarks" },
      { title: "Cozinha", component: CozinhaPage, icon:"bonfire" }
      //{ title: "Pedidos Prontos", component: PedidosProntosPage, icon:"time" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.title === "Logout") {
      this.showConfirm(page);
    } else {
      this.nav.setRoot(page.component);
    }
  }

  showConfirm(page) {
    let confirm = this.alertCtrl.create({
      title: "Logout",
      message:
        "Deseja sair do aplicativo?",
      buttons: [
        {
          text: "Não",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Sim",
          handler: () => {
            this.nav.setRoot(page.component);
            this.storage.clear();
          }
        }
      ]
    });
    confirm.present();
  }
}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CadastPage } from '../pages/cadast/cadast';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
// import { EditarPage } from '../pages/editar/editar';
import { MesaPage } from '../pages/mesa/mesa';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { CardapioListPage } from '../pages/cardapio-list/cardapio-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Cadastrar', component: CadastPage },
			{ title: 'Perfil', component: PerfilPage },
			{ title: 'Cardapio', component: CardapioListPage },
			{ title: 'Mesa', component: MesaPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {

    this.nav.setRoot(page.component);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../class/User';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  public user = new User();
  constructor(public navCtrl: NavController, public navParams: NavParams, private rest: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
  }

  salvar(){    // Função para alterar dados do usuarios
    console.log(this.user.name);
    this.rest.editUser(this.user);
    this.navCtrl.push(EditarPage);
  }

}
 
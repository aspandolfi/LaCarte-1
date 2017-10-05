import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mesa } from '../../class/Restaurante';
import { CardapioPage } from '../cardapio/cardapio';
import { AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-mesa',
  templateUrl: 'mesa.html',
})
export class MesaPage {
	
	public mesaBuffer = new Mesa();
	public data = JSON.parse(localStorage.getItem('mesaBuffer'));

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, public alertCtrl: AlertController) {
  }

	Validar(){ //verifica se a mesa se encontra no banco.
    if(this.mesaBuffer.codigo === this.data.email){
      this.navCtrl.push(CardapioPage)
    }else{
      this.showAlert();
    }
	}
	
  showAlert() { // alerta para erro de codigo de mesa
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Não foi possivel encontrar esta mesa.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesaPage');
  }
}

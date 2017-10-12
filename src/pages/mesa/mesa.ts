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
	public mesa ={};
	public data = JSON.parse(localStorage.getItem('mesaBuffer'));
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, public alertCtrl: AlertController) {
  }

	Validar(){ //verifica se a mesa se encontra no banco.
    if(this.mesaBuffer.codigo === this.data.id){
      this.navCtrl.push(CardapioPage)
    }else{
      this.showAlert();
    }
	}

	getData(){
    this.rest.getMesa(123).subscribe(data=>
      {
        console.log(data);
        this.mesa = data;
        localStorage.setItem('mesaData',JSON.stringify(this.mesa))
        console.log(localStorage);
      }
    );
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

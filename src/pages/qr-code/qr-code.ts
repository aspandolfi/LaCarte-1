import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController ,NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { FormBuilder } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, private camera: Camera) {


  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture()
    }
  }  
  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }
}
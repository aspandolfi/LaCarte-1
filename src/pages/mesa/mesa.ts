import { CardapioListPage } from './../cardapio-list/cardapio-list';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Mesa } from "../../class/Restaurante";
import { AlertController, MenuController } from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { User } from '../../class/User';
import { Storage } from "@ionic/storage";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: "page-mesa",
  templateUrl: "mesa.html"
})
export class MesaPage {
  public mesaLogin = new Mesa();
  public mesa = {};
  public mesaTeste = new Mesa(); //TODO: yada yada yada
  public data = JSON.parse(localStorage.getItem("mesaData"));
  mesaData = { restaurante: "", numero: "", codigo: "", qrcode: "" };
  scannedCode = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public alertCtrl: AlertController,
    private menu: MenuController,
    public storage: Storage,
    private barcodeScanner: BarcodeScanner
  ) {
    this.mesaTeste.usuario = navParams.data;
    this.mesaTeste.codigo = 1; //TODO:Pegar do sql daqui pra baixo
    this.mesaTeste.numero = 182929283;
    this.mesaTeste.qrcode = "xadhgadgasidgadygas";
    this.mesaTeste.restaurante = 1;

    this.storage.set("mesa", this.mesaTeste);
  }

  Validar() {
    //verifica se a mesa se encontra no banco.
    this.navCtrl.setRoot(CardapioListPage);
    // if (this.mesaLogin.codigo === this.data.id) {
    //   this.navCtrl.push(CardapioPage);
    // } else {
    //   this.showAlert();
    // }
  }

  getData() {
    this.rest.getMesa(123).subscribe(data => {
      console.log(data);
      this.mesa = data;
      localStorage.setItem("mesaData", JSON.stringify(this.mesa));
      console.log(localStorage);
    });
  }

  showAlert() {
    // alerta para erro de codigo de mesa
    let alert = this.alertCtrl.create({
      title: "Erro",
      subTitle: "Não foi possivel encontrar esta mesa.",
      buttons: ["OK"]
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(false);
    console.log("ionViewDidLoad MesaPage");
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;
      this.navCtrl.setRoot(CardapioListPage);
    })
  }

}

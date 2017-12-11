import { CardapioListPage } from './../cardapio-list/cardapio-list';
import { Component } from "@angular/core";
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
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
  public mesaArray = new Array<any>();
  public mesa = new Mesa();
  public scannedCode = null;
  public loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public alertCtrl: AlertController,
    private menu: MenuController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner
  ) {
    this.loading = this.loadingCtrl.create({
      content: "Carregando...",
      dismissOnPageChange: true,
      spinner: "dots"
    });
    this.loading.present();
    this.getAllMesas();

  }

  /**
   * verifica se a mesa se encontra no banco.
   */
  public Validar() {
    let mesa = this.getMesaByCode(this.mesaLogin.codigo, this.mesaArray);
    if (mesa.codigo != null) {
      this.navCtrl.setRoot(CardapioListPage);
    } else {
      this.showAlert("Erro","Não foi possivel encontrar esta mesa.");
    }
  }

  /**
   * retorna um array com todas as mesas do banco de dados
   */
  public async getAllMesas():Promise<any>{
    await this.rest.getMesa().subscribe((data:any) => {
      this.mesaArray = data;
      console.log("mesaArray 1: ", this.mesaArray);
      this.loading.dismiss();
    });
    console.log("mesaArray 2: ", this.mesaArray);
  }

  /**
   * Procura por uma mesa especifica atraves do codigo
   * @param codigo
   * @param listaDeMesas
   */
  public getMesaByCode(codigo:any, listaDeMesas:Array<any>):Mesa{
    let mesa = new Mesa;
    let i: number;
    mesa = {codigo: null, numero: null, qrcode: null, restaurante: 1, usuario: null} //TODO: Restaurante dinamico
    for(i = 0; i < listaDeMesas.length && listaDeMesas[i].qrcode != codigo; i++);
    if(i < listaDeMesas.length){
      mesa.codigo = listaDeMesas[i].id;
      mesa.numero = listaDeMesas[i].numero;
      mesa.qrcode = listaDeMesas[i].qrcode;
    }
    console.log("mesa: ",mesa);
    return mesa;
  }

  /**
   * Mostra mensagem popup do ionic
   * @param titleArg
   * @param subTitleArg
   */
  showAlert(titleArg:string, subTitleArg:string) {
    let alert = this.alertCtrl.create({
      title: titleArg,
      subTitle: subTitleArg,
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
      this.mesaLogin.codigo = this.scannedCode;
      this.Validar();
    })
  }

}

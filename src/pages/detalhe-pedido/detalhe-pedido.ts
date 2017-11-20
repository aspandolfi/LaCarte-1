import { CarrinhoPage } from './../carrinho/carrinho';
import { ItemPedido } from './../../class/ItemPedido';
import { Produto } from './../../class/produtos';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";

/**
 * Generated class for the DetalhePedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-detalhe-pedido",
  templateUrl: "detalhe-pedido.html"
})
export class DetalhePedidoPage {
  public produto = new Produto();
  public itemPedido = new ItemPedido();
  public txtAdicio = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
    this.itemPedido = navParams.data;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalhePedidoPage");
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: "Cancelamento",
      message:
        "Deseja cancelar o pedido?",
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
            this.navCtrl.setRoot(CarrinhoPage, this.itemPedido);
          }
        }
      ]
    });
    confirm.present();
  }
}

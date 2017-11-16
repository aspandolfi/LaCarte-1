import { ItemPedido } from './../../class/ItemPedido';
import { Produto } from './../../class/produtos';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.itemPedido = navParams.data;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalhePedidoPage");
  }
}

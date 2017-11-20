import { CarrinhoPage } from "./../carrinho/carrinho";
import { ItemPedido } from "./../../class/ItemPedido";
import { Produto } from "./../../class/produtos";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";
import { Comanda } from "../../class/ItemComanda";
import { Events } from "ionic-angular";

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

  public carrinho: Array<ItemPedido> = [];
  public comanda: Comanda;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
    public events: Events
  ) {
    this.itemPedido = navParams.data;
    this.loadCarrinho();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalhePedidoPage");
  }

  async loadCarrinho() {
    this.storage.get("carrinho").then((data: Array<ItemPedido>) => {
      let id = 1;
      if (data) {
        // Se já tem conteudo
        this.carrinho = this.carrinho.concat(data);
        if (data.length > 0) id = data[0].id + 1;
      }
      if (this.carrinho.length > 0) {
        this.carrinho[0].id = id; // TODO: pegar id pronto do banco
        this.storage.set("carrinho", this.carrinho);
        this.loadComanda();
      }
    });
  }

  loadComanda() {
    this.comanda = new Comanda();
    this.comanda.pedido = new Array<ItemPedido>();
    for (let i = 0; i < this.carrinho.length; i++) {
      this.comanda.pedido.push(this.carrinho[i]);
      this.comanda.id = 1;
    }
    this.storage.get("mesa").then(data => {
      this.comanda.mesa = data;
    });
  }

  saveCarrinho() {
    this.storage.set("carrinho", this.carrinho);
  }

  saveComanda() {
    this.storage.get("comanda").then((data: Comanda) => {
      if (data) {
        // Se já tem conteudo
        this.comanda.pedido = this.comanda.pedido.concat(data.pedido);
      }
      this.storage.set("comanda", this.comanda);
    });
  }

  public removeItem(item: any) {
    console.log("ANTES");
    console.log(this.carrinho);
    this.carrinho = this.carrinho.filter(itemNaLista => {
      console.log("itemNaLista.id !== item.id");
      console.log(itemNaLista.id,"!==",item.id);
      return itemNaLista.id !== item.id;
    });
    console.log("DEPOIS");
    console.log(this.carrinho);
    this.storage.set("carrinho", this.carrinho);
    this.loadComanda();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: "Cancelamento",
      message: "Deseja cancelar o pedido?",
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
            this.removeItem(this.itemPedido);
            this.events.publish('reloadCarrinhoPage');
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}

import { DetalhePedidoPage } from './../detalhe-pedido/detalhe-pedido';
//Modulos
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";
//Paginas
import { ComandaPage } from "./../comanda/comanda";
import { CardapioListPage } from "./../cardapio-list/cardapio-list";
//Classes
import { ItemPedido } from "../../class/ItemPedido";
import { Comanda } from "../../class/ItemComanda";


@IonicPage()
@Component({
  selector: "page-carrinho",
  templateUrl: "carrinho.html"
})
export class CarrinhoPage {
  public carrinho: Array<ItemPedido> = [];
  public comanda: Comanda;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
  ) {
    if(navParams.data!=={}){
      console.log("ENTROU");
      console.log(navParams.data.id);
      this.carrinho.push(navParams.data);
      this.loadCarrinho();
    }
  }

  loadCarrinho() {
    this.storage.get("carrinho")
      .then((data: Array<ItemPedido>) => {
        let id = 1;
        if (data) { // Se já tem conteudo
          this.carrinho = this.carrinho.concat(data);
          if (data.length != 0) id = data[0].id + 1;
        }
        this.carrinho[0].id = id; // TODO: pegar id pronto do banco
        this.storage.set("carrinho", this.carrinho);
        this.loadComanda();
      }
      );
  }

  loadComanda() {
    this.comanda = new Comanda();
    this.comanda.pedido = new Array<ItemPedido>();
    for (let i = 0; i < this.carrinho.length; i++) {
      this.comanda.pedido.push(this.carrinho[i]);
      this.comanda.id = 1;
    }
    this.storage.get("mesa").then((data) => {
      this.comanda.mesa = data;
    });
  }

  saveComanda(){
    this.storage.get("comanda")
    .then((data: Comanda) => {
      if (data) { // Se já tem conteudo
        this.comanda.pedido = this.comanda.pedido.concat(data.pedido);
      }
      this.storage.set("comanda", this.comanda);
    });
  }

  public addItem() {
    this.navCtrl.setRoot(CardapioListPage);
  }

  public removeItem(item: any) {
    this.carrinho = this.carrinho.filter(itemNaLista => {
      return itemNaLista.id !== item.id;
    });
    this.storage.set("carrinho",this.carrinho);
    this.loadComanda();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CarrinhoPage");
  }

  public moveTo() {
    this.showAlert();
    this.saveComanda();
    this.storage.remove("carrinho");
    this.navCtrl.setRoot(CardapioListPage);
  }

  showAlert() {
    // alerta para erro de login
    let alert = this.alertCtrl.create({
      title: "Pedido Enviado!",
      subTitle: "Em instantes você receberá uma notificação.",
      buttons: ["OK"]
    });
    alert.present();
  }

  public detalhe(item: any) {
    this.navCtrl.push(DetalhePedidoPage, item);
  }
}

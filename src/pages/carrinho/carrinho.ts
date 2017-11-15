//Modulos
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";
//Paginas
import { ComandaPage } from "./../comanda/comanda";
import { CardapioListPage } from "./../cardapio-list/cardapio-list";
//Classes
import { ItemPedido } from "../../class/ItemPedido";
import { ItemComanda } from "../../class/ItemComanda";


@IonicPage()
@Component({
  selector: "page-carrinho",
  templateUrl: "carrinho.html"
})
export class CarrinhoPage {
  public itemPedidoList: Array<ItemPedido> = [];
  public itemComanda = new ItemComanda;
  public itemComandaList = new Array<ItemComanda>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
  ) {
    this.itemPedidoList.push(navParams.data);
    this.loadCarrinho();
  }

  loadCarrinho(){
    this.storage.get("carrinho")
      .then((data:Array<ItemPedido>)=>{
        if(data){ // Se já tem conteudo
          let id = 1;
          if(data.length != 0) id = data[0].id + 1;
          this.itemPedidoList = this.itemPedidoList.concat(data);
          this.itemPedidoList[0].id = id; // TODO: pegar id pronto do banco
          this.saveCarrinho();
          this.loadComanda();
        }
      }
    );
  }

  loadComanda(){
    for(let i=0; i < this.itemPedidoList.length; i++){
      this.itemComanda = new ItemComanda;
      this.itemComanda.pedido = this.itemPedidoList[i];
      this.itemComanda.id = this.itemComanda.pedido.id; //TODO: Pegar id do banco yada yada
      this.itemComanda.status = 0;
      this.itemComandaList.push(this.itemComanda);
    }
  }

  saveCarrinho(){
    this.storage.set("carrinho", this.itemPedidoList);
  }

  public addItem(){
    this.navCtrl.setRoot(CardapioListPage);
  }

  public removeItem(item: any) {
    this.itemPedidoList = this.itemPedidoList.filter(itemNaLista => {
      return itemNaLista.id !== item.id;
    });
    this.saveCarrinho();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CarrinhoPage");
  }

  public moveTo() {
    this.showAlert();
    this.storage.set("carrinho", []);
    this.storage.get("comanda")
    .then((data:Array<ItemComanda>)=>{
      if(data){ // Se já tem conteudo
        this.itemComandaList = this.itemComandaList.concat(data);
      }
      this.storage.set("comanda", this.itemComandaList);
      this.navCtrl.setRoot(CardapioListPage);
    });
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

}
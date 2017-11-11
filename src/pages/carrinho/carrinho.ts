//Modulos
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
//Paginas
import { ComandaPage } from "./../comanda/comanda";
import { CardapioListPage } from "./../cardapio-list/cardapio-list";
//Classes
import { ItemPedido } from "../../class/ItemPedido";


@IonicPage()
@Component({
  selector: "page-carrinho",
  templateUrl: "carrinho.html"
})
export class CarrinhoPage {
  public itemPedidoList: Array<ItemPedido> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {
    this.storage.get("carrinho").then((data)=>{
      let teste = data;
      console.log(teste);
      this.itemPedidoList.push(teste);
      console.log(this.itemPedidoList[0].produto.url);
    });
  }

  public addItem(){
    this.navCtrl.push(CardapioListPage);
  }

  public removeItem(item: any) {
    this.itemPedidoList = this.itemPedidoList.filter(item1 => {
      return item1.produto.nome !== item.produto.nome;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CarrinhoPage");
  }

  public moveTo() {
    this.navCtrl.push(ComandaPage);
  }
}

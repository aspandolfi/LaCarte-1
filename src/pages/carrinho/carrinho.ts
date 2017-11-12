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
    this.itemPedidoList = navParams.data;
    this.getCarrinho();
    this.storage.set("carrinho", this.itemPedidoList);
  }

  getCarrinho(){
    this.storage.get("carrinho")
      .then((data)=>{
        if(data){ // Se já tem conteudo
          this.itemPedidoList.concat(data);
        }
      }
    );
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

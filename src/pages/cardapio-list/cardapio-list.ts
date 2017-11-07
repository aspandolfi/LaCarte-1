import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Cardapio2Page } from "../cardapio2/cardapio2";

/**
 * Generated class for the CardapioListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cardapio-list",
  templateUrl: "cardapio-list.html"
})
export class CardapioListPage {
  selectedItem: any = "comidas";
  myLocation: any;

  searchQuery: string = "";
  private produtos = [];
  private comidas = [];
  private bebidas = [];
  private sobremesas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.produtos = [
      { nome: "Lasanha", urlImage: "http://www.pifpaf.com.br/img/000000000000050138006.JPG", valor: 10, tipo: 1},
      { nome: "Comida 2", urlImage: "xxx", valor: 10, tipo: 1},
      { nome: "Comida 3", urlImage: "xxx", valor: 10, tipo: 1},
      { nome: "Comida 4", urlImage: "xxx", valor: 10, tipo: 1},
      { nome: "Comida 5", urlImage: "xxx", valor: 10, tipo: 1},
      { nome: "bebida 1", urlImage: "xxx", valor: 10, tipo: 2},
      { nome: "bebida 2", urlImage: "xxx", valor: 10, tipo: 2},
      { nome: "bebida 3", urlImage: "xxx", valor: 10, tipo: 2},
      { nome: "bebida 4", urlImage: "xxx", valor: 10, tipo: 2},
      { nome: "bebida 5", urlImage: "xxx", valor: 10, tipo: 2},
      { nome: "sobremesa 1", urlImage: "xxx", valor: 10, tipo: 3},
      { nome: "sobremesa 2", urlImage: "xxx", valor: 10, tipo: 3},
      { nome: "sobremesa 3", urlImage: "xxx", valor: 10, tipo: 3},
      { nome: "sobremesa 4", urlImage: "xxx", valor: 10, tipo: 3},
      { nome: "sobremesa 5", urlImage: "xxx", valor: 10, tipo: 3}
    ];
    this.separarCat();
  }

  separarCat(){
    this.comidas = [];
    this.bebidas = [];
    this.sobremesas = [];
    for(let i = 0; i < this.produtos.length; i++){
      if(this.produtos[i].tipo==1) this.comidas.push(this.produtos[i]);
      if(this.produtos[i].tipo==2) this.bebidas.push(this.produtos[i]);
      if(this.produtos[i].tipo==3) this.sobremesas.push(this.produtos[i]);
    }
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != "") {
      this.comidas = this.bebidas = this.sobremesas = this.produtos.filter(item => {
        return item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }else{
      this.separarCat();
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CardapioListPage");
  }

  moveTo(item: any) {
    console.log(item);
    this.navCtrl.push(Cardapio2Page, item);
  }
}

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
  private comidas = [];
  private bebidas = [];
  private sobremesas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.bebidas = [
      { nome: "bebidas 1", urlImage: "xxx", valor: 10 },
      { nome: "bebidas2", urlImage: "xxx", valor: 10 },
      { nome: "bebidas3", urlImage: "xxx", valor: 10 },
      { nome: "bebidas4", urlImage: "xxx", valor: 10 },
      { nome: "bebidas5", urlImage: "xxx", valor: 10 }
    ];
    this.comidas = [
      {
        nome: "Lasanha",
        urlImage: "http://www.pifpaf.com.br/img/000000000000050138006.JPG",
        valor: 10
      },
      { nome: "Comida 2", urlImage: "xxx", valor: 10 },
      { nome: "Comida 3", urlImage: "xxx", valor: 10 },
      { nome: "Comida 4", urlImage: "xxx", valor: 10 },
      { nome: "Comida 5", urlImage: "xxx", valor: 10 }
    ];
    this.sobremesas = [
      { nome: "sobremesas1", urlImage: "xxx", valor: 10 },
      { nome: "sobremesas2", urlImage: "xxx", valor: 10 },
      { nome: "sobremesas3", urlImage: "xxx", valor: 10 },
      { nome: "sobremesas4", urlImage: "xxx", valor: 10 },
      { nome: "sobremesas5", urlImage: "xxx", valor: 10 }
    ];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != "") {
      this.comidas = this.comidas.filter(item => {
        return item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
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

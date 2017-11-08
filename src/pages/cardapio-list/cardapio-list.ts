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
      { nome: "Lasanha", url: "http://www.pifpaf.com.br/img/000000000000050138006.JPG", valor: 10, tipo: 1, descricao: "comida gostosa feita de etc"},
      { nome: "Hamburguer", url: "https://www.designmaster.com.br/designmarketing/produtos/g_foto1_3246.jpg", valor: 10, tipo: 1, descricao: "comida gostosa feita de etc"},
      { nome: "Macarrão", url: "https://s3.amazonaws.com/midia.naminhapanela.com/wp-content/uploads/2016/08/14134251/amatriciana4.png", valor: 10, tipo: 1, descricao: "comida gostosa feita de etc"},
      { nome: "Agua", url: "http://www.flaska.com.br/documents/flaska.com.br/large/396.jpg", valor: 10, tipo: 2, descricao: "comida gostosa feita de etc"},
      { nome: "Refrigerante", url: "http://midias.gazetaonline.com.br/_midias/jpg/2017/06/20/refrigerante-5158046.jpg", valor: 10, tipo: 2, descricao: "comida gostosa feita de etc"},
      { nome: "Suco de laranja", url: "http://www.xando.com.br/images/itens/itemCopo.jpg", valor: 10, tipo: 2, descricao: "comida gostosa feita de etc"},
      { nome: "Sorvete de chocolate", url: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia11042/slide/sorvetes1-cursos-cpt.jpg", valor: 10, tipo: 3, descricao: "comida gostosa feita de etc"},
      { nome: "Mousse de morango", url: "https://www.embare.com.br/wp-content/uploads/2013/06/mousse-de-morango-receitas-embare.jpg", valor: 10, tipo: 3, descricao: "comida gostosa feita de etc"},
      { nome: "Torta de limão", url: "http://www.corpoealma.com/wp-content/uploads/2016/08/Receita-de-Torta-de-Lima%CC%83o-2.jpg", valor: 10, tipo: 3, descricao: "comida gostosa feita de etc"}
    ];
    this.separarCat();
  }

  separarCat() {
    this.comidas = [];
    this.bebidas = [];
    this.sobremesas = [];
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].tipo == 1) this.comidas.push(this.produtos[i]);
      if (this.produtos[i].tipo == 2) this.bebidas.push(this.produtos[i]);
      if (this.produtos[i].tipo == 3) this.sobremesas.push(this.produtos[i]);
    }
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != "") {
      this.comidas = this.bebidas = this.sobremesas = this.produtos.filter(
        item => {
          return item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1;
        }
      );
    } else {
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

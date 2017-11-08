import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Cardapio2Page } from "../cardapio2/cardapio2";
import { Storage } from "@ionic/storage";

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

  private produto = [];
  private adicional = [];
  private item_pedido_adicional = [];

  private comidas = [];
  private bebidas = [];
  private sobremesas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.initializeItems();
  }

  initializeItems() {
    let descricaoPadrao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit nisi ex. Sed semper sollicitudin consectetur. Suspendisse potenti. Phasellus aliquet.";
    this.produto = [
      { id: 1, nome: "Lasanha", url: "http://www.pifpaf.com.br/img/000000000000050138006.JPG", valor: 10, tipo: 1, descricao: descricaoPadrao},
      { id: 2, nome: "Hamburguer", url: "https://www.designmaster.com.br/designmarketing/produtos/g_foto1_3246.jpg", valor: 10, tipo: 1, descricao: descricaoPadrao},
      { id: 3, nome: "Macarrão", url: "https://s3.amazonaws.com/midia.naminhapanela.com/wp-content/uploads/2016/08/14134251/amatriciana4.png", valor: 10, tipo: 1, descricao: descricaoPadrao},
      { id: 4, nome: "Agua", url: "http://www.flaska.com.br/documents/flaska.com.br/large/396.jpg", valor: 10, tipo: 2, descricao: descricaoPadrao},
      { id: 5, nome: "Refrigerante", url: "http://midias.gazetaonline.com.br/_midias/jpg/2017/06/20/refrigerante-5158046.jpg", valor: 10, tipo: 2, descricao: descricaoPadrao},
      { id: 6, nome: "Suco de laranja", url: "http://www.xando.com.br/images/itens/itemCopo.jpg", valor: 10, tipo: 2, descricao: descricaoPadrao},
      { id: 7, nome: "Sorvete de chocolate", url: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia11042/slide/sorvetes1-cursos-cpt.jpg", valor: 10, tipo: 3, descricao: descricaoPadrao},
      { id: 8, nome: "Mousse de morango", url: "https://www.embare.com.br/wp-content/uploads/2013/06/mousse-de-morango-receitas-embare.jpg", valor: 10, tipo: 3, descricao: descricaoPadrao},
      { id: 9, nome: "Torta de limão", url: "http://www.corpoealma.com/wp-content/uploads/2016/08/Receita-de-Torta-de-Lima%CC%83o-2.jpg", valor: 10, tipo: 3, descricao: descricaoPadrao}
    ];
    this.adicional = [
      {id: 1, nome: "Bacon"},
      {id: 2, nome: "Queijo"},
      {id: 3, nome: "Cebola"} 
    ];
    this.item_pedido_adicional = [
      {id: 1, adicional: 0, itemPedido: 0, quantidade: 0}
    ];

    this.storage.set("produto",this.produto);
    //this.storage.set("adicional",this.adicional);
    this.separarCat();
  }

  separarCat() {
    this.comidas = [];
    this.bebidas = [];
    this.sobremesas = [];
    for (let i = 0; i < this.produto.length; i++) {
      if (this.produto[i].tipo == 1) this.comidas.push(this.produto[i]);
      if (this.produto[i].tipo == 2) this.bebidas.push(this.produto[i]);
      if (this.produto[i].tipo == 3) this.sobremesas.push(this.produto[i]);
    }
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != "") {
      this.comidas = this.bebidas = this.sobremesas = this.produto.filter(
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
    console.log(item.id);
    this.navCtrl.push(Cardapio2Page, item.id);
  }
}

import { Adicional } from '../../class/Adicionais';
import { RestProvider } from '../../providers/rest/rest';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Cardapio2Page } from "../cardapio2/cardapio2";
import { Storage } from "@ionic/storage";
import { ItemPedido } from "../../class/ItemPedido";
import { Produto } from "../../class/produtos";

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

  private produto: Array<Produto>;
  private carrinho: Array<ItemPedido> = [];

  private comidas = [];
  private bebidas = [];
  private sobremesas = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public storage: Storage
  ) {
    this.getData();
  }

  initializeItems() {
    console.log("produtos: ",this.produto);
    this.createStorageItem("produto",this.produto);
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

  getData() {
    this.rest.getProduto().subscribe((data:Array<any>) => {
      console.log("data: ",data);
      this.produto = new Array<Produto>();
      for(let i = 0; i < data.length; i++){
        this.produto.push(new Produto);
        for(let j = 0; j < data[i].produtosAdicionais.length; j++){
          this.produto[i].adicional = new Array<Adicional>();
          this.produto[i].adicional.push(new Adicional)
          this.produto[i].adicional[j] = {
            id: data[i].produtosAdicionais[j].adicionais.id,
            nome: data[i].produtosAdicionais[j].adicionais.nome,
            quantidade: 0,
            valor: data[i].produtosAdicionais[j].valor
          }
        }
        this.produto[i].descricao = data[i].descricao;
        this.produto[i].id = data[i].id;
        this.produto[i].nome = data[i].nome;
        this.produto[i].tipo = data[i].tipoProduto.id;
        this.produto[i].url = data[i].urlImagem;
        this.produto[i].valor = data[i].valor;
      }
      this.initializeItems();
    });
  }

  createStorageItem(keyName:string, keyValue:any){
    this.storage.get(keyName).then((data)=>{
      if(!data){
        this.storage.set(keyName, keyValue);
      }
    });
  }

  updateStorageArray(keyName:string, keyValue:any){
    this.storage.get(keyName).then((data)=>{
      if(data){ // Se já tem conteudo
        data.push(keyValue);
        this.storage.set(keyName, data);
      }else{ // senão
        this.storage.set(keyName, keyValue);
      }
    });
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
    this.navCtrl.push(Cardapio2Page, item.id);
  }
}

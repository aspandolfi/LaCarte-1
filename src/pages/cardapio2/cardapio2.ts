//Modulos
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
//Paginas
import { CarrinhoPage } from '../carrinho/carrinho';
//Classes
import { Produto } from '../../class/produtos';
import { ItemPedido } from '../../class/ItemPedido';


@IonicPage()
@Component({
  selector: 'page-cardapio2',
  templateUrl: 'cardapio2.html',
})

export class Cardapio2Page {
  public produto = new Produto();
  public itemPedido = new ItemPedido();
  public itemPedidoList: Array<ItemPedido> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get("produto")
      .then((data)=>{
        let id_do_produto = navParams.data;
        this.produto = data[(id_do_produto)-1]; //TODO: Melhorar essa busca, esta passível de erro
        this.itemPedido.produto = this.produto;
        this.itemPedido.valor = this.produto.valor;
        this.itemPedido.obs = "";
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cardapio2Page');
  }

  public mudaQuantia(adic: any, sinal: number){
    if(adic.quantidade + sinal >= 0){
      adic.quantidade += sinal;
      this.itemPedido.valor += sinal * adic.valor;
    }
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

  public moveTo(){
    this.itemPedidoList.push(this.itemPedido);
    this.storage.set("carrinho",this.itemPedidoList);
    this.navCtrl.push(CarrinhoPage);
  }
}

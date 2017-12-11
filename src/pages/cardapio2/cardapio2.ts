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
  public txtAdicio = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get("produto")
      .then((data:Array<Produto>)=>{
        let id_do_produto = navParams.data;
        data = data.filter(item => {
          return item.id === id_do_produto;
        });
        this.produto = data[0]

        this.itemPedido.produto = this.produto;
        this.itemPedido.valor = this.produto.valor;
        this.itemPedido.obs = "";
        this.itemPedido.status = 0;
        if(this.itemPedido.produto.adicional.length > 0) this.txtAdicio = "Adicionais";
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cardapio2Page');
  }

  public mudaQuantia(adic: any, quant: number){
    if(adic.quantidade + quant >= 0){
      adic.quantidade += quant;
      this.itemPedido.valor += quant * adic.valor;
    }
  }

  public moveTo(){
    this.navCtrl.setRoot(CarrinhoPage, this.itemPedido);
  }
}

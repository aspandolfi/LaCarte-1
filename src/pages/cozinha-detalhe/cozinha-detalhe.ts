import { ItemPedido } from './../../class/ItemPedido';
import { Produto } from './../../class/produtos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the CozinhaDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cozinha-detalhe',
  templateUrl: 'cozinha-detalhe.html',
})
export class CozinhaDetalhePage {
  // public produto = new Produto();
  // public itemPedido = new ItemPedido();
  // public txtAdicio = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  //   this.storage.get("produto")
  //   .then((data)=>{
  //     let id_do_produto = navParams.data;
  //     this.produto = data[(id_do_produto)-1]; //TODO: Melhorar essa busca, esta passível de erro
  //     this.itemPedido.produto = this.produto;
  //     this.itemPedido.valor = this.produto.valor;
  //     this.itemPedido.obs = "";
  //     if(this.itemPedido.produto.adicional.length > 0) this.txtAdicio = "Adicionais";
  //   }
  // );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CozinhaDetalhePage');
  }

}

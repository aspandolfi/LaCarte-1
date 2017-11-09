import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../class/produtos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { Storage } from "@ionic/storage";

// comentário só pra enviar outra vez pro git pq tenho medo de usar "git rm --cached"

@IonicPage()
@Component({
  selector: 'page-cardapio2',
  templateUrl: 'cardapio2.html',
})

export class Cardapio2Page {
  public produto = new Produto();
  public total = 0.0;
  public obs: string;

  public produtos: any;
  public adicional = [];

  /*
  adicional = [
    {"id": 1, "nome": "Bacon", "quantidade": 0, "valor": 2},
    {"id": 2, "nome": "Queijo", "quantidade": 0, "valor": 1.5},
    {"id": 3, "nome": "Cebola", "quantidade": 0, "valor": 1}
  ]
  */

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get("produto")
      .then((data)=>{
        let id_do_produto = navParams.data;
        this.produtos = data[(id_do_produto)-1];

        this.produto.id = this.produtos.id;
        this.produto.nome = this.produtos.nome;
        this.produto.url = this.produtos.url;
        this.produto.valor = this.produtos.valor;
        this.produto.tipo = this.produtos.tipo;
        this.produto.descricao = this.produtos.descricao;

        this.adicional = this.produtos.adicionais;
        this.total = this.produto.valor;
      }
    );
    console.log(this.adicional)
    /*
    this.storage.get("adicional")
      .then((data)=>{
        this.adicional = data;
        this.total = this.produto.valor;
      }
    );
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cardapio2Page');
  }

  public mudaQuantia(adic: any, sinal: number){
    if(adic.quantidade + sinal >= 0){
      adic.quantidade += sinal;
      this.total += sinal * adic.valor;
    }
  }

  public moveTo(total:number){
    console.log("total = ", total);
    this.navCtrl.push(CarrinhoPage, total);
  }

}

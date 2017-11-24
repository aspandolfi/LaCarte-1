import { CozinhaDetalhePage } from './../cozinha-detalhe/cozinha-detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Comanda } from '../../class/ItemComanda';
import { Storage } from "@ionic/storage";
import { ItemPedido } from '../../class/ItemPedido';


@IonicPage()
@Component({
  selector: 'page-cozinha',
  templateUrl: 'cozinha.html',
})
export class CozinhaPage {
  public comanda: Comanda;
  public cozinha: Comanda;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public events: Events
  ) {
    this.comanda = new Comanda;
    this.comanda.pedido = new Array<ItemPedido>();
    this.cozinha = new Comanda;
    this.cozinha.pedido = new Array<ItemPedido>();

    this.loadComanda().then(() => {
      this.loadCozinha();
    });

    events.subscribe('atualizarItemStatus', (data) => {
      this.loadComanda().then(() => {
        this.changeStatus(this.comanda, data);
        this.saveComanda();
        this.loadCozinha().then(() => {
          this.saveCozinha();
        });
      });
    });
  }

  changeStatus(lst: Comanda, data: any) {
    let pos: number = this.getItemPos(lst, data.id);
    let value: number = data.val;
    lst.pedido[pos].status = value;
    lst.pedido[pos].respostaCozinha = data.resposta;
  }

  public getItemPos(lst: Comanda, id: number): number {
    for (let i = 0; i < lst.pedido.length; i++) {
      if (lst.pedido[i].id === id) {
        return i;
      }
    }
    return null;
  }

  async loadComanda() {
    await this.storage.get("comanda").then((data: Comanda) => {
      if (data) {
        this.comanda = data;
      } else {
        this.comanda.pedido = [];
      }
    });
  }

  async loadCozinha() {
    await this.storage.get("cozinhaPedidos")
      .then((data: Comanda) => {
        this.cozinha = new Comanda();
        this.cozinha.id = 1;
        this.cozinha.pedido = new Array<ItemPedido>();
        for (let i = 0; i < this.comanda.pedido.length; i++) {
          if (this.comanda.pedido[i].status === 0) {
            if (this.idIsInArray(this.comanda.pedido[i].id, this.cozinha.pedido) == false) {
              this.cozinha.pedido.push(this.comanda.pedido[i]);
            }
          }
        }
      }
    );
  }

  idIsInArray(id: number, lst: Array<ItemPedido>): boolean {
    for (let i = 0; i < lst.length; i++) {
      if (lst[i].id === id) {
        return true;
      }
    }
    return false;
  }

  saveCozinha() {
    this.storage.set("cozinhaPedidos", this.cozinha);
  }

  saveComanda() {
    this.storage.set("comanda", this.comanda);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CozinhaPage');
  }

  public moveTo(item: any) {
    this.navCtrl.push(CozinhaDetalhePage, item);
  }

}

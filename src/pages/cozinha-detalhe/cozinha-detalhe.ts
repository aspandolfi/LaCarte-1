import { ItemPedido } from "./../../class/ItemPedido";
import { Produto } from "./../../class/produtos";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";


@IonicPage()
@Component({
  selector: "page-cozinha-detalhe",
  templateUrl: "cozinha-detalhe.html"
})
export class CozinhaDetalhePage {
  testRadioResult: any;
  testRadioOpen: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CozinhaDetalhePage");
  }
  recusar() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Motivo do cancelamento");

    alert.addInput({
      type: "radio",
      label: "Produto incompleto",
      value: "1",
      checked: true
    });

    alert.addInput({
      type: "radio",
      label: "Adicional em falta",
      value: "2",
      checked: false
    });

    alert.addInput({
      type: "radio",
      label: "Equipamento para o preparo com defeito",
      value: "3",
      checked: false
    });

    alert.addInput({
      type: "radio",
      label: "Outro",
      value: "4",
      checked: false
    });

    alert.addButton("Cancel");
    alert.addButton({
      text: "OK",
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

  confirmar() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Tempo Estimado");

    alert.addInput({
      type: "radio",
      label: "10",
      value: "1",
      checked: true
    });

    alert.addInput({
      type: "radio",
      label: "20",
      value: "2",
      checked: false
    });

    alert.addInput({
      type: "radio",
      label: "30",
      value: "3",
      checked: false
    });

    alert.addInput({
      type: "radio",
      label: "40",
      value: "4",
      checked: false
    });

    alert.addInput({
      type: "radio",
      label: "50",
      value: "4",
      checked: false
    });

    alert.addInput({
      type: "radio",
      label: "60",
      value: "4",
      checked: false
    });

    alert.addButton("Cancel");
    alert.addButton({
      text: "OK",
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }
}

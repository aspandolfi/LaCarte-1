import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { IonicPage, NavController, AlertController, LoadingController } from "ionic-angular";
import { User } from "./../../class/User";
import { MesaPage } from '../mesa/mesa';
import { UserService } from "../../services/user.service";
import { ResponseData } from "../../class/ResponseData";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-cadast",
  templateUrl: "cadastro.html"
})
export class CadastPage {
  private formCadastro: FormGroup;

  public user = new User();

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private service: UserService,
    private storage: Storage,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
  ) {
    this.formCadastro = this.formBuilder.group({
      nome: ["", Validators.required],
      cpf: ["", Validators.required],
      telefone: ["", Validators.required],
      email: ["", Validators.required],
      senha: ["", Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CadastPage");
  }

  showAlert(mensagem?: string) {
    // alerta para erro de login
    let alert = this.alertCtrl.create({
      title: "Erro ao cadastrar.",
      subTitle: (mensagem ? mensagem : "Não foi possível cadastrar o usuário!"),
      buttons: ["OK"]
    });
    alert.present();
  }

  public salvar() {
    let loading = this.loadingCtrl.create({
      content: "Salvando...",
      dismissOnPageChange: true,
      spinner: "dots"
    });
    loading.present();

    this.service.salvar(this.user)
      .subscribe((data: ResponseData) => {
        if (data.status) {
          this.storage.set("_token", data.objeto);
          this.navCtrl.push(MesaPage);
        }
        else {
          let mensagem;
          data.mensagens.forEach(val => mensagem += val);
          loading.dismiss();
          this.showAlert(mensagem);
        }
      });
  }
}

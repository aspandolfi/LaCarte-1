import { LoginPage } from './../login/login';
import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { IonicPage, NavController } from "ionic-angular";
import { User } from "./../../class/User";
import { RestProvider } from "./../../providers/rest/rest";

@IonicPage()
@Component({
  selector: "page-cadast",
  templateUrl: "cadastro.html"
})
export class CadastPage {
  private formCadastro: FormGroup;

  // usuarios = {};
  public user = new User();

  constructor(
    public navCtrl: NavController,
    private rest: RestProvider,
    private formBuilder: FormBuilder
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

  public salvar() {
    console.log(this.user.name);
    this.rest.addUser(this.user);
    this.navCtrl.push(LoginPage);
  }
}

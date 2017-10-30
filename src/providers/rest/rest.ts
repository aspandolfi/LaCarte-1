import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
// import 'rxjs/add/operator/';
// ============================================= Comunicação com a API ==============================================

@Injectable()

export class RestProvider {

  private apiUrl = "http://lacarte-api.azurewebsites.net/api/v1"; // link para acessa o banco de dados.

  constructor(public http: HttpClient) {
    console.log("Hello RestProvider Provider");
  }

  // =========================== trabalhando com os  usuarios ===========================

  public getUser(id: any) { // função que imprime o usuário na tela.
    return this.http.get(this.apiUrl + "/user/" + id).map(res => res);
    // .catch(error => console.log(error)
  }

  addUser(myData) { //função que adiciona um usuário ao banco de dados.

    this.http.post(this.apiUrl + "/user/save", myData).subscribe(data => {
      console.log(data);
    });
  }

  editUser(myData) { //função que permite editar um usuário.
    console.log(myData);
    this.http.post(this.apiUrl + "/user/edit", myData).subscribe(data => {
    console.log(data);
    });
  }

  deleteUser(myData){ //função que permite deletar um usuário.
    this.http.post(this.apiUrl + "/user/delete", myData).subscribe(data => {
    console.log(data);
    });
  }

  // ==================================================

  public getMesa(id: any) { // pegando mesa
    return this.http.get(this.apiUrl + "/mesa/" + id).map(res => res);
    // .catch(error => console.log(error)
  }

  //=============== trabalhando com os itens do cardápio. =================

  public getProduto(id: any) { // função que mostra os produtos no cardápio.
    return this.http.get(this.apiUrl + "/prod/" + id).map(res => res);
    // .catch(error => console.log(error)
  }


}

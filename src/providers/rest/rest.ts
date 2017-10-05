import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
// import 'rxjs/add/operator/';
// ============================================= Comunicação com a API ==============================================

@Injectable()
export class RestProvider {

  private apiUrl = "http://lacarte-api.azurewebsites.net/banco"; // link para acessa o banco de dados.
  
  constructor(public http: HttpClient) {
    console.log("Hello RestProvider Provider");
  }

  // =========================== trabalhando com os  usuarios ===========================
 
  public getUser(id: any) { // função que imprime o usuário na tela.
    return this.http.get(this.apiUrl + "/" + id).map(res => res);
    // .catch(error => console.log(error)
  }

  addUser(myData) { //função que adiciona um usuário ao banco de dados.

    this.http.post(this.apiUrl + "/save", myData).subscribe(data => {
      console.log(data);
      localStorage.setItem('userData', JSON.stringify(data));
    });
  }

  editUser(myData){ //função que permite editar um usuário.
    console.log(myData);
    this.http.post(this.apiUrl + "/edit", myData).subscribe(data => {
    console.log(data);
    });
  }

  deleteUser(myData){ //função que permite deletar um usuário.
    this.http.post(this.apiUrl + "/delete", myData).subscribe(data => {
    console.log(data);
    });
  }
  
  //=============== trabalhando com os itens do cardápio. ================= 
 
  public getProduto(id: any) { // função que mostra os produtos no cardápio.
    return this.http.get(this.apiUrl + "/" + id).map(res => res);
    // .catch(error => console.log(error)
  }

  
}

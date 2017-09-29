import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
// import 'rxjs/add/operator/';

@Injectable()
export class RestProvider {
  private apiUrl = "http://172.16.108.1:3000/banco";
  public teste: Array<{}>;
  userData = {"name": "","email": "", "telefone": "","cpf": "","senha": ""};
  constructor(public http: HttpClient) {
    console.log("Hello RestProvider Provider");
  }

  public getUser(id: any) {
    return this.http.get(this.apiUrl + "/" + id).map(res => res);
    // .catch(error => console.log(error)
  }

  public getUserLogin(email: any) {
    return this.http.get(this.apiUrl + "/verifica" ).map(res => res);
    // .catch(error => console.log(error)
  }

  addUser(myData) {
    //var teste = JSON.stringify({name: this.})
    this.http.post(this.apiUrl + "/save", myData).subscribe(data => {
      console.log(data);
      localStorage.setItem('userData', JSON.stringify(data));
    });
  }
}

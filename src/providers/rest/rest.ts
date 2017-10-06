import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
// import 'rxjs/add/operator/';

@Injectable()

export class RestProvider {

	//private apiUrl = "http://lacarte-api.azurewebsites.net";
	private apiUrl = "http://172.16.108.1:3000";
  public teste: Array<{}>;

  constructor(public http: HttpClient) {
    console.log("Hello RestProvider Provider");
  }

	//==================================================

  public getUser(id: any) { // pegando usuario
    return this.http.get(this.apiUrl + "/users/" + id).map(res => res);
    // .catch(error => console.log(error)
  }

  addUser(myData) { //adicionar usuario
    //var teste = JSON.stringify({name: this.})
    this.http.post(this.apiUrl + "/users/save", myData).subscribe(data => {
      console.log(data);
    });
  }

  editUser(myData){ //editar usuario
    console.log(myData);
    this.http.post(this.apiUrl + "/users/edit", myData).subscribe(data => {
    console.log(data);
    });
  }

  deleteUser(myData){ //deletar usuario
    this.http.post(this.apiUrl + "/users/delete", myData).subscribe(data => {
    console.log(data);
    });
	}
	
	// ==================================================

	public getMesa(id: any) { // pegando mesa
    return this.http.get(this.apiUrl + "/mesa/" + id).map(res => res);
    // .catch(error => console.log(error)
  }
}

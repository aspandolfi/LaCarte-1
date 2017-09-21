/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
*/
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/*
@Injectable()
export class RestProvider {

  apiUrl = 'http://172.16.108.1:3000/banco';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  public getUsers() {
    return  this.http.get(this.apiUrl)
    // .do((res : Response ) => console.log(res.json())
    .map((res : Response ) => res);
    // .catch(error => console.log(error));
  }

  addUser(myData) {
    //var teste = JSON.stringify({name: this.})
    this.http.post(this.apiUrl + "/save", myData)
    .subscribe(data => {
      console.log(data);
    })
  }
}*/
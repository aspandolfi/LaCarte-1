import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class RestProvider {
  
  private apiUrl = 'http://172.16.108.1:3000/banco';
  
  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
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

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {
	private apiPath = "172.16.108.11:3000/api/v1/heroes/1";
  constructor(public http: Http) {
    console.log('Hello UsuarioProvider Provider');
  }

	getUserData(){
		return this.http.get(this.apiPath + '<Incluir chave da API aqui>' + this.getApiKey());
	}

	getApiKey(): string{	
				return "sua_api_vai_aqui";
	}
}

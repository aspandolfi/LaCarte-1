import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
    private url: string = 'http://localhost:8082/api/v1';
    // private url: string = 'https://lacarte-api.herokuapp.com/api/v1';

    constructor(private http: HttpClient) {
    }

    get(endpoint: string, params?: any, reqOpts?: any, token?: any) {
        if (!reqOpts) {
            reqOpts = {
                params: new HttpParams()
            };
        }

        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new HttpParams();
            for (let k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }

        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");

        if (token) {
            headers.append("Authorization", "Bearer " + token);
        }

        return this.http.get(this.url + '/' + endpoint, { params: reqOpts, headers: headers });
    }

    post(endpoint: string, body: any, reqOpts?: any, token?: any) {
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");

        if (token) {
            headers.append("Authorization", "Bearer " + token);
        }

        return this.http.post(this.url + '/' + endpoint, body, { params: reqOpts, headers: headers });
    }

    put(endpoint: string, body: any, reqOpts?: any, token?: any) {
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");

        if (token) {
            headers.append("Authorization", "Bearer " + token);
        }

        return this.http.put(this.url + '/' + endpoint, body, { params: reqOpts, headers: headers });
    }

    delete(endpoint: string, reqOpts?: any, token?: any) {
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");

        if (token) {
            headers.append("Authorization", "Bearer " + token);
        }

        return this.http.delete(this.url + '/' + endpoint, { params: reqOpts, headers: headers });
    }

    patch(endpoint: string, body: any, reqOpts?: any, token?: any) {
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");

        if (token) {
            headers.append("Authorization", "Bearer " + token);
        }

        return this.http.put(this.url + '/' + endpoint, body, { params: reqOpts, headers: headers });
    }
}

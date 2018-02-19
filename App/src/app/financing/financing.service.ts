import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { environment } from './../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
};


@Injectable()
export class FinancingService {

  constructor(
    private http: HttpClient ) { }

  get(data: any) {
    return this.http.post(environment.urlApiProd + "financing", data, { headers: {'Content-Type': 'application/json'} })
      .map((res) => {
        return res;
      })
      .catch(err => Observable.throw(err.message) );
  }



}

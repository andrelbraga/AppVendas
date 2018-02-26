import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
// tslint:disable-next-line:import-blacklist
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

  post (data: any) {
    return this.http.post(environment.urlApiProd + '/financing', data, { headers: { 'Content-Type': 'application/json' } })
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  // get(){
  //   return this.http.get(environment.urlApiProd)
  //   .map(this.extractData)
  //   .catch(this.handleErrorObservable);
  // }

  private extractData(res: Response) {
    console.log(res);
    const body = res;
      return body || {};
  }
  private handleErrorObservable (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.message || error);
  }



}

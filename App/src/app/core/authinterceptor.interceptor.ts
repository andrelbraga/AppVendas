import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpHeaders, HttpInterceptor, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //const authReq = req.clone({ headers: req.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')});

        console.log( JSON.stringify(req) + 'Sending request with new header now ...');

        // send the newly created request
        return next.handle(req).do((e: any)=>{ 
            console.log(e);
        })
        .catch((error, caught) => {
        // intercept the respons error and displace it to the console
        console.log('Error Occurred');
        console.log(JSON.stringify(error));
        // return the error to the method that called it
        return Observable.throw(error);
        }) as any;
    }

}

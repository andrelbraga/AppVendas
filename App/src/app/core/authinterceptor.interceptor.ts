import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request to add the new header.
        const headers = [
            '\'Access-Control-Allow-Origin\' : \'*\'',
            '\'Access-Control-Allow-Methods\' : \'*\'',
            '\'Access-Control-Max-Age\' : \'1728000\'',
            '\'Content-Type\': \'application/x-www-form-urlencoded\'',
            '\'Access-Control-Allow-Credentials\': \'true\''
        ];

        const authReq = req.clone({ headers: req.headers.set('Content-Type', 'application/x-www-form-urlencoded')});

        console.log('Sending request with new header now ...');

        // send the newly created request
        return next.handle(authReq)
        .catch((error, caught) => {
        // intercept the respons error and displace it to the console
        console.log('Error Occurred');
        console.log(error);
        // return the error to the method that called it
        return Observable.throw(error);
        }) as any;
    }

}

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  Router
} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private router : Router,
    private toastController : ToastController
  ){

  }
  intercept(request : HttpRequest<any>, handler : HttpHandler ) : Observable<HttpEvent<any>>{
    // const token  = localStorage.getItem('token');
    /*if(token){
      //siguiente
    }*/

    if(!request.headers.has('Content-Type')){
        request = request.clone({
          setHeaders : {
            'content-type' : 'application/json'
          }
        });
    }
    request = request.clone({
      headers : request.headers.set('Accept','application/json')
    });

    return handler.handle(request).pipe(
      map((event : HttpEvent<any>) => {
        if(event instanceof HttpResponse){
          // console.info('Log : ',event);
        }
        return event;
      }),
      catchError((error : HttpErrorResponse) => {
        console.info(error);
        return throwError(error);
      }));
  }
}

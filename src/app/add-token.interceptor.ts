
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { TmplAstUnknownBlock } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';

@Injectable()

export class addTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private _errorService: ErrorService){

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token')

    if(token){
      request = request.clone({setHeaders: {Authorization:  `Bearer ${token}`}})
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse)=>{
        if(error.status === 401){
          this._errorService.msjError(error)
          this.router.navigate(['/login'])
        }
        return throwError(()=> new Error())
      })
    );
  }
 
};

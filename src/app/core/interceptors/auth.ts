import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    let status: string;
    let clonedReq = httpRequest.clone();
    if (localStorage.getItem('token') != null) {
      this.requests.push(httpRequest);
      clonedReq = httpRequest.clone({
        headers: httpRequest.headers
          .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
          .set('Cache-Control', 'no-cache')
          .set('Pragma', 'no-cache'),
      });
    } else {
      this.requests.slice();
    }

    return next.handle(clonedReq).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          let elapsedTime = Date.now() - startTime;
          console.log(
            'request finished in ' +
              elapsedTime +
              ' ms With Status :' +
              event.statusText
          );
          if (event.ok) {
          }
        }
      })
    );
  }
}

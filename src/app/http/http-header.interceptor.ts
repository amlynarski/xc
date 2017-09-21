import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headerReq = req.clone({
      setHeaders: {
        'CherryTech-Brand': 'cherrycasino.desktop',
        'Accept-Language': 'en-GB'
      }
    });

    return next.handle(headerReq);
  }
}
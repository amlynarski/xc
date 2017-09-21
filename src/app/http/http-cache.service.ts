import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class HttpCacheService {
  private cacheObj = {};

  constructor() {
  }

  get(req: HttpRequest<any>): HttpResponse<any> | null {
    return this.cacheObj[req.url];
  }

  put(req: HttpRequest<any>, resp: HttpResponse<any>): void {
    this.cacheObj[req.url] = resp;
  }

}

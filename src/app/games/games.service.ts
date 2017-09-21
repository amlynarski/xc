import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { API_URL, CATEGORY_URL } from './games.consts';
import { Category } from './shared/category.model';

@Injectable()
export class GamesService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http
      .get(API_URL + CATEGORY_URL)
      .map((response: Response) => {
        return response;
      })
      .catch(this.handleError);
  }

  getGamesFromCategory(categorySlug: string) {
    return this.http
      .get(`${API_URL + CATEGORY_URL}/${categorySlug}`)
      .map((response: (Response & Category )) => {
        return response._embedded.games;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}

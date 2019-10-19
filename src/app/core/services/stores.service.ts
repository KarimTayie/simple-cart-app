import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(
    private http: HttpClient
  ) { }

  fetchStoresData(): Observable<any> {
    return this.http.get<any>('https://api.unocart.com/api/v1/2000/groceries/shops/')
      .pipe(
        map((data) => {
          return data.results;
        })
      );
  }
}

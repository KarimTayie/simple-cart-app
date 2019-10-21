import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Cacheable } from 'ngx-cacheable';

import { Store } from 'src/app/shared/interfaces/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  // cached storesList data from fetchStoresList method
  storesList: Store[];

  constructor(
    private http: HttpClient
  ) { }

  @Cacheable()
  fetchStoresList(): Observable<any> {
    return this.http.get<any>('https://api.unocart.com/api/v1/2000/groceries/shops/')
      .pipe(
        map((data) => {
          const res: Store[] = data.results;

          this.storesList = res;
          return res;
        })
      );
  }

  @Cacheable()
  fetchStoresDetails(id: number): Observable<any> {
    return this.http.get<any>(`https://api.unocart.com/api/v1/6000/groceries/shops/${id}/specials/`)
      .pipe(
        map((data) => {
          return data.results;
        })
      );
  }

  getStoresList() {
    if (this.storesList) {
      return of(this.storesList);
    } else {
      return this.fetchStoresList();
    }
  }
}

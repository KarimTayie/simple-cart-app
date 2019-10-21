import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { forkJoin, of, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { StoresService } from 'src/app/core/services/stores.service';
import { Store, StoreItem } from 'src/app/shared/interfaces/store.model';

import { secondsToHms, trackByFn } from '../../../shared/helpers/utils.helper';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  storeDetails$: Observable<Store>;
  secondsToHms: (d: number) => string;
  trackByFn: (index: any, item: any) => any;

  storeItems: StoreItem[];
  storeItemsCopy: StoreItem[];
  showAll = false;

  constructor(
    private route: ActivatedRoute,
    private storesService: StoresService
  ) { }

  ngOnInit() {
    this.secondsToHms = secondsToHms;
    this.trackByFn = trackByFn;

    this.storeDetails$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = parseInt(params.get('id'), 10);

        // Combining StoresDetailsObj, StoresList and id
        return forkJoin(this.storesService.fetchStoresDetails(id), this.storesService.fetchStoresList(), of(id));
      }),
      map(([storesDetails, storesList, id]) => {
        const selectedStore: Store = storesList.filter((el: Store) => el.id === id)[0];

        const storeDetailsObj: Store = {
          logo_image: selectedStore.logo_image,
          name: selectedStore.name,
          description: selectedStore.description,
          opening_times: selectedStore.opening_times,
          items: storesDetails,
          id: selectedStore.id,
          addresses: selectedStore.addresses
        };

        this.storeItems = storesDetails;
        this.storeItemsCopy = this.storeItems.slice(0, 3);

        return storeDetailsObj;
      })
    );
  }

  seeAll() {
    this.storeItemsCopy = this.storeItemsCopy.length === 3 ? this.storeItems.slice() : this.storeItems.slice(0, 3);
    this.showAll = this.showAll ? false : true;
  }

}

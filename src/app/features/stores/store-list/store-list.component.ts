import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Store } from '../../../shared/interfaces/store.model';

import { StoresService } from '../../../core/services/stores.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/public_api';

import { trackByFn } from '../../../shared/helpers/utils.helper';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit, OnDestroy {
  storesArr: Store[] = [];
  returnedArray: Store[];

  storesListSubscription: Subscription;

  trackByFn: (index: any, item: any) => any;

  constructor(
    private storesService: StoresService
  ) { }

  ngOnInit() {
    this.trackByFn = trackByFn;

    this.storesListSubscription = this.storesService.fetchStoresList().subscribe(
      (stores) => {
        this.storesArr = stores;
        this.returnedArray = this.storesArr.slice(0, 10);
      }
    );

  }

  ngOnDestroy() {
    // Unsubscriping on ngOnDestroy for performance
    if (this.storesListSubscription) {
      this.storesListSubscription.unsubscribe();
    }
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.storesArr.slice(startItem, endItem);
  }

}

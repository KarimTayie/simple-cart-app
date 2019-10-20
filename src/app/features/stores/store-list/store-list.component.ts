import { Component, OnInit } from '@angular/core';

import { Store } from '../../../shared/interfaces/store.model';

import { StoresService } from '../../../core/services/stores.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/public_api';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  storesArr: Store[] = [];
  returnedArray: Store[];

  constructor(
    private storesService: StoresService
  ) { }

  ngOnInit() {
    this.storesService.fetchStoresList().subscribe(
      (stores) => {
        this.storesArr = stores;
        this.returnedArray = this.storesArr.slice(0, 10);
      }
    );

  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.storesArr.slice(startItem, endItem);
  }

}

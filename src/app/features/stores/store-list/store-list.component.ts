import { Component, OnInit } from '@angular/core';

import { StoresService } from '../../../core/services/stores.service';
import { Store } from '../../../shared/interfaces/store.model';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  storesArr: Store[] = [];

  constructor(
    private storesService: StoresService
  ) { }

  ngOnInit() {
    this.storesService.fetchStoresData().subscribe(
      (stores) => {
        this.storesArr = stores;
      }
    );
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { StoresService } from '../../../../core/services/stores.service';
import { Store } from '../../../../shared/interfaces/store.model';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {
  @Input() store: Store;

  constructor(
    private storesService: StoresService
  ) { }

  ngOnInit() {
    // this.storesService.setStoreDate(this.store);
  }

}

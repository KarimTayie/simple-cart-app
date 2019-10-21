import { Component, OnInit, Input } from '@angular/core';

import { Store } from '../../../../shared/interfaces/store.model';

import { trackByFn } from '../../../../shared/helpers/utils.helper';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {
  @Input() store: Store;

  trackByFn: (index: any, item: any) => any;

  constructor() { }

  ngOnInit() {
    this.trackByFn = trackByFn;
  }

}

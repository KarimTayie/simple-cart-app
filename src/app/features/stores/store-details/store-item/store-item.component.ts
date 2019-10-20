import { Component, OnInit, Input } from '@angular/core';

import { StoreItem } from 'src/app/shared/interfaces/store.model';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent implements OnInit {
  @Input() item: StoreItem;

  constructor() { }

  ngOnInit() {
  }

}

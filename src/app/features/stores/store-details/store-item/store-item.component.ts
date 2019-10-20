import { Component, OnInit, Input } from '@angular/core';

import { StoreItem } from 'src/app/shared/interfaces/store.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent implements OnInit {
  @Input() item: StoreItem;
  pCount: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  // Passing product count, price, name to cart service cart
  addToCart(pCount: number, item: StoreItem) {

    const productObject = {
      count: pCount,
      ...item
    };

    // console.log(productObject);
    this.cartService.addToCart(productObject);

    // Reseting number input field after clicking add to cart
    this.pCount = 0;
  }

}

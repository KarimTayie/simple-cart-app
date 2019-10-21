import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { StoreItem } from 'src/app/shared/interfaces/store.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart$ = new BehaviorSubject<StoreItem[] | null>([]);
  cart: StoreItem[] = [];

  constructor() { }

  // Add to cart if passed validation method
  addToCart(productObject: StoreItem) {
    const validationFlag = this.validateProductForCart(productObject);

    if (validationFlag) {
      this.addToSelectedProducts(productObject);
      this.cart$.next(this.cart);
    } else {
      this.cart$.next(null);
    }

  }

  // Validation method to check if there are products from different shops/stores
  validateProductForCart(productObject: StoreItem) {
    if (this.cart.length === 0) {
      return true;
    } else if (this.cart.find(el => el.shop !== productObject.shop)) {
      return false;
    } else {
      return true;
    }
  }

  addToSelectedProducts(productObject: StoreItem) {
    let flag = false;

    // A simple algorithm to check wether the product is in the array or not
    // if it's not in the array it will add it
    for (const prod of this.cart) {
      if (prod.id === productObject.id) {
        prod.count += productObject.count;
        flag = true;
      }
    }

    if (!flag) {
      this.cart.push(productObject);
    }
  }

  calculateCartProdCountsAndPrice(cart: StoreItem[]): {price: number, count: number} {
    return cart.reduce((total, currentValue) => {
      total.count += currentValue.count;
      total.price += currentValue.price_cents * currentValue.count;
      return total;
    }, { price: 0, count: 0 });
  }

  clearCart() {
    this.cart = [];
    this.cart$.next(this.cart);
  }

  getCartSubject() {
    return this.cart$;
  }
}

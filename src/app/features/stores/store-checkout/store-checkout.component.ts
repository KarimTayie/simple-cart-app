import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { CartService } from 'src/app/core/services/cart.service';
import { StoreItem } from 'src/app/shared/interfaces/store.model';

@Component({
  selector: 'app-store-checkout',
  templateUrl: './store-checkout.component.html',
  styleUrls: ['./store-checkout.component.scss']
})
export class StoreCheckoutComponent implements OnInit {
  @ViewChild('success', { static: false }) template: TemplateRef<any>;
  modalRef: BsModalRef;

  // cart: StoreItem[];
  cart$: any;

  constructor(
    public cartService: CartService,
    private modalService: BsModalService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log('test');
    // this.cartService.getCartSubject().subscribe(
    //   (cart) => {
    //     this.cart = cart;
    //   }
    // );
    this.cart$ = this.cartService.getCartSubject();
  }

  showSuccessMessage() {
    this.modalRef = this.modalService.show(this.template, { class: 'modal-sm', ignoreBackdropClick: true });
  }
}

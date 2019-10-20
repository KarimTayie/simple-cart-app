import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { CartService } from 'src/app/core/services/cart.service';
import { StoreItem } from '../../interfaces/store.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('template', { static: false }) template: TemplateRef<any>;
  modalRef: BsModalRef;


  isCollapsed = true;

  totalCartPrice = 0;
  totalCartCount = 0;
  cart: StoreItem[] = [];

  constructor(
    private cartService: CartService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.cartService.getCartSubject().subscribe(
      (cart) => {
        if (cart === null) {
          this.modalRef = this.modalService.show(this.template, { class: 'modal-sm', ignoreBackdropClick: true });
          return;
        }

        this.cart = cart;

        const { price, count } = this.cartService.calculateCartProdCountsAndPrice(cart);
        this.totalCartPrice = price;
        this.totalCartCount = count;
      }
    );
  }

  cancelAddingSelectedItem() {
    this.modalRef.hide();
  }

  clearCurrentCart() {
    this.cartService.clearCart();
    this.modalRef.hide();
  }

}

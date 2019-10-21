import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CartService } from 'src/app/core/services/cart.service';
import { StoreItem } from 'src/app/shared/interfaces/store.model';

import { trackByFn } from '../../../shared/helpers/utils.helper';

@Component({
  selector: 'app-store-checkout',
  templateUrl: './store-checkout.component.html',
  styleUrls: ['./store-checkout.component.scss']
})
export class StoreCheckoutComponent implements OnInit {
  @ViewChild('success', { static: false }) template: TemplateRef<any>;
  modalRef: BsModalRef;

  trackByFn: (index: any, item: any) => any;

  // cart: StoreItem[];
  cart$: Observable<StoreItem[]>;

  constructor(
    public cartService: CartService,
    private modalService: BsModalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.trackByFn = trackByFn;

    this.cart$ = this.cartService.getCartSubject();
  }

  showSuccessMessage() {
    this.modalRef = this.modalService.show(this.template, { class: 'modal-sm', ignoreBackdropClick: true });
  }
}

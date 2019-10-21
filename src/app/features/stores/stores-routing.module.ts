import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreListComponent } from './store-list/store-list.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreCheckoutComponent } from './store-checkout/store-checkout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: StoreListComponent
  // },
  // {
  //   path: ':id',
  //   component: StoreDetailsComponent
  // },
  // {
  //   path: 'checkout',
  //   component: StoreCheckoutComponent
  // }
  // { path: '', pathMatch: 'full', children: [
  //   {
  //     path: '',
  //     pathMatch: 'full',
  //     redirectTo: StoreListComponent
  //   },
  //   {
  //     path: ':id',
  //     component: StoreDetailsComponent
  //   },
  // ]},
  // {
  //   path: 'checkout',
  //   component: StoreCheckoutComponent
  // }
  {
    path: 'checkout',
    component: StoreCheckoutComponent
  },
  {
    path: 'list',
    component: StoreListComponent,
  },
  {
    path: ':id',
    component: StoreDetailsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class StoresRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreListComponent } from './store-list/store-list.component';
import { StoreDetailsComponent } from './store-details/store-details.component';

const routes: Routes = [
  {
    path: '',
    component: StoreListComponent
  },
  {
    path: ':id',
    component: StoreDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class StoresRoutingModule {}

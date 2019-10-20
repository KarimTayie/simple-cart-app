import { NgModule } from '@angular/core';

import { StoresRoutingModule } from './stores-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreCardComponent } from './store-list/store-card/store-card.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreItemComponent } from './store-details/store-item/store-item.component';

@NgModule({
  imports: [SharedModule, StoresRoutingModule],
  declarations: [StoreListComponent, StoreCardComponent, StoreDetailsComponent, StoreItemComponent],
})
export class StoresModule {}

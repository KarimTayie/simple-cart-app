import { NgModule } from '@angular/core';

import { StoresRoutingModule } from './stores-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule, StoresRoutingModule],
})
export class StoresModule {}

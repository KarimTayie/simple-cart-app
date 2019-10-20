import { NgModule } from '@angular/core';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [
    PaginationModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  exports: [
    PaginationModule,
    ButtonsModule
  ]
})
export class SharedBootstrapModule {}

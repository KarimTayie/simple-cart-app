import { NgModule } from '@angular/core';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    PaginationModule,
    ButtonsModule,
    CollapseModule,
    ModalModule
  ]
})
export class SharedBootstrapModule {}

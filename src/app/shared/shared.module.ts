import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedBootstrapModule } from './shared-bootstrap/shared-bootstrap.module';
import { LayoutModule } from './layout/layout.module';
import { NavbarComponent } from './layout/navbar/navbar.component';

export const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,

  SharedBootstrapModule,
  // LayoutModule
];

export const declarations = [
  NavbarComponent
];

@NgModule({
  declarations,
  imports: [ ...modules ],
  exports: [ ...modules, ...declarations ],
})
export class SharedModule {}

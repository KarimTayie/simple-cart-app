import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedBootstrapModule } from './shared-bootstrap/shared-bootstrap.module';

export const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,

  SharedBootstrapModule
];

export const declarations = [];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ],
  declarations
})
export class SharedModule {}

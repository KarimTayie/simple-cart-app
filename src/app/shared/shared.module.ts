import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

export const declarations = [];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ],
  declarations
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresModule } from './features/stores/stores.module';

export function loadStoresModule() {
  return StoresModule;
}

const routes: Routes = [
  {
    path: '',
    loadChildren: loadStoresModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

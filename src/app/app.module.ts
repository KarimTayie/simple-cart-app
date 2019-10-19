import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { StoresModule } from './features/stores/stores.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
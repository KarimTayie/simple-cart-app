import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,

    NgProgressModule,
    NgProgressHttpModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,

    NgProgressHttpModule,
    NgProgressModule],
  providers: []
})
export class CoreModule {}

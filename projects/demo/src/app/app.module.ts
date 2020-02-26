import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VirtualScrollTreeComponent, VirtualScrollTreeModule } from 'ngx-virtual-scroll-tree';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    VirtualScrollTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { VirtualScrollTreeComponent } from './ngx-virtual-scroll-tree.component';



@NgModule({
  declarations: [VirtualScrollTreeComponent],
  imports: [
    CommonModule,
    VirtualScrollerModule
  ],
  exports: [VirtualScrollTreeComponent]
})
export class VirtualScrollTreeModule { }

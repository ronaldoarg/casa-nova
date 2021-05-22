import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { PopupModule } from '../popup/popup.module';

@NgModule({
  imports: [
    CommonModule,
    PopupModule
  ],
  exports: [ProductComponent],
  declarations: [ProductComponent]
})
export class ProductModule { }

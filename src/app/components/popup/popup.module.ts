import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PopupComponent],
  declarations: [PopupComponent]
})
export class PopupModule { }

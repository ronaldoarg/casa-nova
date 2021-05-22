import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  isPopupVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.isPopupVisible = false;
  }

  setPopupVisibility(data: boolean) {
    this.isPopupVisible = data;
  }

}

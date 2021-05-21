import { Component, OnInit } from '@angular/core';
import { Product } from './product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor() { }

  ngOnInit() {

    this.product = {
      image: "src/assets/images/produto01.jpg",
      name: "Hack Show",
      fee: {
        total: 20,
        current: 20
      },
      description: "Hack lindo com palhinha",
      price: "R$ 30"
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from './components/product/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'casa-nova';
  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        image: "src/assets/images/products/talheres.jpeg",
        name: "Faqueiro",
        fee: {
          total: 5,
          current: 4
        },
        description: "Praqueles jantarzinhos com amigos e amigas",
        price: "30"
      },
      {
        image: "src/assets/images/products/copos.jpeg",
        name: "Jogo de copos",
        fee: {
          total: 3,
          current: 2
        },
        description: "Porque precisamos nos hidratar né",
        price: "10"
      },
      {
        image: "src/assets/images/products/panelas.jpeg",
        name: "Jogo de panelas",
        fee: {
          total: 5,
          current: 3
        },
        description: "Pra fazer uma comida show",
        price: "50"
      },
      {
        image: "src/assets/images/products/pratos.jpeg",
        name: "Pratos",
        fee: {
          total: 4,
          current: 3
        },
        description: "Praqueles jantarzinhos com amigos e amigas",
        price: "20"
      },
      {
        image: "src/assets/images/products/jogo-americano.jpeg",
        name: "Jogo Americano",
        fee: {
          total: 6,
          current: 4
        },
        description: "Sempre bom evitar aquelas sujeirinhas na mesa",
        price: "10"
      },
      {
        image: "src/assets/images/products/xicaras.jpeg",
        name: "Xícaras",
        fee: {
          total: 6,
          current: 4
        },
        description: "Para tomar aquele café da manhã gostoso",
        price: "10"
      },
      {
        image: "src/assets/images/products/tacas.jpeg",
        name: "Taças",
        fee: {
          total: 3,
          current: 3
        },
        description: "Nossas visitas com certeza merecem tomar uns drinkinhos",
        price: "20"
      },
      {
        image: "src/assets/images/products/tijela.jpeg",
        name: "Cumbucas",
        fee: {
          total: 3,
          current: 1
        },
        description: "Pra dar aquele xarme na cozinha",
        price: "30"
      },
      {
        image: "src/assets/images/products/potes.jpeg",
        name: "Potes variados",
        fee: {
          total: 6,
          current: 4
        },
        description: "Potinhos variados sempre quebram um galho",
        price: "20"
      },
    ]
  }
}

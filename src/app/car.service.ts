import {Injectable} from '@angular/core';
import {Model} from './car';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  model: Model;
  order: Order;

  constructor() {
    this.model = {
      base_price: 30000,
      engines: [
        {id: 1, name: 'Uno', image: './assets/engine-1.png', price: 0},
        {id: 2, name: 'Due', image: './assets/engine-2.png', price: 1000},
        {id: 3, name: 'Tre', image: './assets/engine-3.png', price: 2000},
      ]
    };

    this.order = {
      engine: this.model.engines[0],
    };
  }
}

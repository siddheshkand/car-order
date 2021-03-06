import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CarService} from '../car.service';

const NAVIGATION = [
  '/engine',
  '/exterior',
  '/interior',
  '/autopilot',
  '/payment',
];

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private router: Router, private car: CarService) {
  }

  ngOnInit() {
  }

  get totalPrice() {
    let autopilot_cost = 0;
    if (this.car.order.autopilot) {
      autopilot_cost = 1000;
    }

    return this.car.model.base_price + this.car.order.engine.price + this.car.order.wheel.price + this.car.order.interior.price + autopilot_cost;
  }

  goNext() {
    // this.router.navigate(['/exterior']);
    const ind = NAVIGATION.findIndex((i) => i === this.router.url);
    if (ind < NAVIGATION.length - 1) {
      console.log(ind, NAVIGATION.length);
      const nextUrl = NAVIGATION[ind + 1];
      this.router.navigate([nextUrl]);
    } else {
      alert('Now Submit order');
    }
  }
}

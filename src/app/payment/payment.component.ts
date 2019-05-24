import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CarService} from '../car.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  form: FormGroup;


  constructor(public car: CarService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(this.car.order.firstname, Validators.required),
      lastname: new FormControl(this.car.order.lastname, Validators.required),
      email: new FormControl(this.car.order.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(this.car.order.phone, Validators.required),
      card_number: new FormControl(this.car.order.card_name, Validators.required),
      card_date: new FormControl(this.car.order.card_date, Validators.required),
    });

    this.form.valueChanges.subscribe(() => {
      Object.keys(this.form.value).forEach((k) => {
        this.car.order[k] = this.form.value[k];
      });
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {CarService} from '../car.service';

@Component({
  selector: 'app-autopilot',
  templateUrl: './autopilot.component.html',
  styleUrls: ['./autopilot.component.scss']
})
export class AutopilotComponent implements OnInit {

  constructor(private car: CarService) {
  }

  ngOnInit() {
  }

}

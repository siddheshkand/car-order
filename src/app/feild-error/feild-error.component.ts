import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-feild-error',
  templateUrl: './feild-error.component.html',
  styleUrls: ['./feild-error.component.scss']
})
export class FeildErrorComponent implements OnInit {

  @Input() field: FormControl;

  constructor() {
  }

  ngOnInit() {
  }

}

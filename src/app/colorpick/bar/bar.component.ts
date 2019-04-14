import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color-bar',
  templateUrl: './bar.component.html',
  styles: []
})
export class BarComponent implements OnInit {
  private barValue: number;

  constructor() {
  }

  ngOnInit() {
  }

  @Output()
  valueChange = new EventEmitter<number>();

  @Input()
  get value() {
    return this.barValue;
  }

  set value(val) {
    this.barValue = val;
  }

  get barWidth() {
    return Math.ceil(this.barValue * 100 / 255) + '%';
  }

  onClick(event) {
    const offset = event.offsetX * 100 / event.currentTarget.offsetWidth;
    this.barValue = Math.ceil(offset * 255 / 100);
    this.valueChange.emit(this.barValue);
  }
}

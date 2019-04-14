import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


function hexVal(num: number) {
  let result = num.toString(16);
  if (result.length === 1) {
    result = '0' + result;
  }
  return result;
}

function hexToRgb(value: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

@Component({
  selector: 'app-colorpick',
  templateUrl: './colorpick.component.html',
  styleUrls: ['./colorpick.component.scss']
})
export class ColorpickComponent implements OnInit {

  constructor() {
  }

  @Input()
  get color() {
    return '#' + hexVal(this.r) + hexVal(this.g) + hexVal(this.b);
  }

  set color(value) {
    const rgb = hexToRgb(value);
    if (rgb) {
      this.r = rgb.r;
      this.g = rgb.g;
      this.b = rgb.b;
    }
  }

  r = 0;
  g = 0;
  b = 0;

  @Output()
  colorChange = new EventEmitter<string>();

  update() {
    this.colorChange.emit(this.color);
  }

  ngOnInit() {
  }

}

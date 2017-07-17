import { Component } from '@angular/core';

@Component({
  selector: 'demo-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  title: string;

  constructor() {
    this.title = 'This is title';
  }

  toUpper(value: string){
    return value.toUpperCase();
  }
}

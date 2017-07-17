import { Component } from '@angular/core';

@Component({
  selector: 'demo-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  title: string;
  isEnabled: string;
  cssClass: string;

  constructor() {
    this.title = 'This is title';
    this.isEnabled = 'disabled';
    this.cssClass = 'myClass';
  }

}

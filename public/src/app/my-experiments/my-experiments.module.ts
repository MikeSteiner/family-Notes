import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MyExperimentsComponent } from './my-experiments.component';
import { InterpolationComponent } from './interpolation/';
import { PropertyBindingComponent } from './property-binding/';
import { NewModuleComponent } from './new-module/new-module.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MyExperimentsComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    NewModuleComponent
  ],
  exports: [
    InterpolationComponent
  ]
})
export class MyExperimentsModule { }

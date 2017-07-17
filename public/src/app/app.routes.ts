import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyExperimentsComponent } from './my-experiments';
import { InterpolationComponent } from './my-experiments/interpolation';
import { PropertyBindingComponent } from './my-experiments/property-binding';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'my-experiments', component: MyExperimentsComponent},
  { path: 'my-experiments/interpolation', component: InterpolationComponent},
  { path: 'my-experiments/prop-binding', component: PropertyBindingComponent},

];

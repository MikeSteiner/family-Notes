import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule} from '@angular/router';
import { appRoutes} from "./app.routes";
import { MyExperimentsModule } from './my-experiments/my-experiments.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    MyExperimentsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

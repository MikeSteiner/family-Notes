import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './components/app.component';
import { routing } from './app.routing';
import { TopbandComponent, NavComponent, FooterComponent, NoContentComponent } from './components';
import { HomeComponent, NotesComponent, AboutComponent } from './components';

@NgModule({
	imports:[BrowserModule, routing],
	declarations:[
		AppComponent,
		TopbandComponent,
		HomeComponent,
		NotesComponent,
		AboutComponent,
		NavComponent,
		FooterComponent,
		NoContentComponent
	],
	providers:[],
	bootstrap:[AppComponent]
})
export class AppModule{}
import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: 'nav.component.html',
    styles: [` 
        ul {
            list-style-type: none;
        }
        
        li{
			display: inline-block;		
			margin: 5px;	
			padding: 5px;
			height: 100%;				
		}
    `]
})

export class NavComponent{
}
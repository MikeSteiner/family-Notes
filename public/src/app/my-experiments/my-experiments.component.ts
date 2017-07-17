import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-experiments',
  templateUrl: 'my-experiments.component.html',
  styleUrls: ['my-experiments.component.css']
})
export class MyExperimentsComponent implements OnInit {

  constructor(router: Router) {
  }

  ngOnInit() {
  }

}

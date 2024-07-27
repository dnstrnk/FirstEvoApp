import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  param:any;
  constructor(public route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.route.data.subscribe(
      response => {this.param = response[0]})
  }
}
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  myInterval = 3000;
  param:any;
  constructor(public route: ActivatedRoute, public router: Router,private dataService: DataService) {}
  ngOnInit() {
    this.route.data.subscribe(
      response => {this.param = response[0]})
  }
}

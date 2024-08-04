import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allrecipes',
  templateUrl: './allrecipes.component.html',
  styleUrls: ['./allrecipes.component.css'],
})
export class AllrecipesComponent {
  param:any;
  constructor(public route: ActivatedRoute, public router: Router,private dataService: DataService) {}
  ngOnInit() {
    this.route.data.subscribe(
      response => {this.param = response[0]})
  }
 
}

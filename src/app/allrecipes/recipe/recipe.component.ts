import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  constructor(public route: ActivatedRoute, public router: Router,private dataService: DataService) {}
  urlId: any;
  param:any;
  status: boolean[] = [];
  statusB: boolean[] = [];
  ngOnInit() {
      this.route.data.subscribe(
        response => {this.param = response[0]})
    }
}

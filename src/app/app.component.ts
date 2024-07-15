import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  array_cars = [{name: "Car_1"},{name: "Car_2"},{name: "Car_3"},{name: "Car_4"}];
  date_now = new Date();
  item = 1;
  
}

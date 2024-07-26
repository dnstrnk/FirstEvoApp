import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  constructor(private dataService: DataService) {}
  exampleOneF() {
    this.dataService.exampleOne().subscribe({
      next: (response:any) => {console.log(response);}
    })
  }
  exampleTwoF() {
    this.dataService.exampleTwo().subscribe({
      next: (response:any) => {console.log(response);}
    })
  }
  exampleThreeF() {
    this.dataService.exampleThree().subscribe({
      next: (response:any) => {console.log(response);}
    })
  }
  exampleFourF() {
    this.dataService.exampleFour().subscribe({
      next: (response:any) => {console.log(response);},
      error: (err: HttpErrorResponse) => {if(err.status === 404){console.log('404 Error')}}
    })
  }
  exampleFiveF() {
    this.dataService.exampleFive().subscribe({
      next: (response:any) => {console.log(response);}
    })
  }
  exampleSixF() {
    this.dataService.exampleSix().subscribe({
      next: (response:any) => {console.log(response);}
    })
  }
  exampleSevenF() {
    this.dataService.exampleSeven().subscribe({
      next: (response:any) => {console.log(response);}
    })
  }
}

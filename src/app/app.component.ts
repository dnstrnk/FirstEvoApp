import { Component, VERSION } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstEvoApp';
  array:number [] = [];
  arrayR:any [] = [];
  constructor() {}
  intervalSubs$!: Subscription;
  intervalSubsR$!: Subscription;
  getCounter() {
    const intervalStream$ = interval(2000);
    this.intervalSubs$ = intervalStream$.subscribe((value) => {this.array.push(value);});
  }
  stopSubs() {
    this.intervalSubs$.unsubscribe();
  }
  getCounterR() {
    const intervalStreamR$ = interval(2000);
    this.intervalSubsR$ = intervalStreamR$.pipe(map(value => `Random Value: ${Math.floor(Math.random() * 1000)}`)).subscribe((value) => {this.arrayR.push(value);});
  }
  stopSubsR() {
    this.intervalSubsR$.unsubscribe();
  }
  stopSubsAll() {
    this.stopSubs();
    this.stopSubsR();
  }
  getCounterAll() {
    this.getCounter();
    this.getCounterR();
  }
}

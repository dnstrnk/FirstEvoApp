import { Component, VERSION } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstEvoApp';
  constructor(public counterService: CounterService) {}
  
  counterSubs$!: Subscription;
  enableStopButton = false;

  getCounter() {
    this.counterSubs$ = this.counterService.setCounter().subscribe((next) => {
      console.log(next);
    });
    this.enableStopButton = true;
  }

  stopSubs() {
    this.counterSubs$.unsubscribe();
    this.enableStopButton = false
  }
}

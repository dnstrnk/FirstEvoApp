import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`,
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`,
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`,
    },
  ];
  alerts = this.defaultAlerts;

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  }
  notiflix_alert(type: string) {
    switch (type) {
      case 'success':
        Notify.success('Success Alert');
        break;
      case 'warning':
        Notify.warning('Warning Alert');
        break;
      case 'error':
        Notify.failure('Error Alert');
        break;
      case 'info':
        Notify.info('Info Alert');
        break;
    }
  }
}

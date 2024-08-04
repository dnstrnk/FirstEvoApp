import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/store/auth.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogged:boolean = false;
  constructor(public store: Store,private authState:AuthState) {}
}

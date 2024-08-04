import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
<<<<<<< Updated upstream
import { FormsModule } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { AuthState } from '../../store/auth.state';
import { AuthUpdate } from '../../store/model/auth.model';
=======
>>>>>>> Stashed changes

interface authValid {
  username: string | null;
  password: string | null;
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
<<<<<<< Updated upstream
  token!:string;
  data:authValid[] = [
  ]
  create_data = {
    username: null,
    password: null,
  };
  constructor(private dataService:DataService,private auth:DataService,private store: Store) {}
  currentAuth = this.store.selectSnapshot(AuthState.getAuthObject);
  ngOnInit() {
    this.store.select(AuthState.getAuthObject).subscribe({
      next: (value) => {
        this.currentAuth = value;
      },
    });
  }
  createData() {
    this.data.push({
      username: this.create_data.username,
      password: this.create_data.password,
    });
    this.dataService.auth(this.data[0].username,this.data[0].password).subscribe({
      next: (response:any) => {this.token=response.jwtToken;this.store.dispatch(
        new AuthUpdate({
          isAuth: true,
          login: this.data[0].username,
          token: this.token,
        })
      )}
    })
  }
=======
  constructor (private dataService:DataService) {}
>>>>>>> Stashed changes
}

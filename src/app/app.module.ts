import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AccessRoleGuard } from './access-role.guard';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ErrorComponent,
    UserProfileComponent,
    UserListComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService, AccessRoleGuard],
})
export class AppModule {}

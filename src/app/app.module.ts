import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotauthComponent } from './notauth/notauth.component';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { RecipeComponent } from './allrecipes/recipe/recipe.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { CreaterecipeComponent } from './createrecipe/createrecipe.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AllusersComponent } from './allusers/allusers.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminrecipesComponent } from './adminrecipes/adminrecipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    NotauthComponent,
    AllrecipesComponent,
    RecipeComponent,
    AuthComponent,
    RegComponent,
    CreaterecipeComponent,
    MainpageComponent,
    AllusersComponent,
    EditUserComponent,
    AdminrecipesComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    NgxsModule.forRoot([]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

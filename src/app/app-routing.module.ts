import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RecipeComponent } from './allrecipes/recipe/recipe.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { CreaterecipeComponent } from './createrecipe/createrecipe.component';
import { AllusersComponent } from './allusers/allusers.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminrecipesComponent } from './adminrecipes/adminrecipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { FetchResolver } from './fetch.resolver';
import { FetchRecipeResolver } from './fetchrecipe.resolver';

const routes: Routes = [
  {path: '', component: MainpageComponent, resolve: [FetchResolver]},
  {path:'recipes', component: AllrecipesComponent, resolve: [FetchResolver]},
  {path:'recipe/:id', component: RecipeComponent, resolve: [FetchRecipeResolver]},
  {path:'authorization', component: AuthComponent},
  {path:'registration', component: RegComponent},
  {path:'create-recipe', component: CreaterecipeComponent},
  {path:'admin/users', component: AllusersComponent},
  {path:'admin/users/:id', component: EditUserComponent},
  {path:'admin/recipes', component: AdminrecipesComponent},
  {path:'admin/recipes/:id', component: EditRecipeComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

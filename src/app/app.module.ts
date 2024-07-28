import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoState } from './todo.state';
@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule, 
    NgxsModule.forRoot([TodoState]) ,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
    ],
  declarations: [ AppComponent, TodoFormComponent, TodoListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AutofocusModule} from 'angular-autofocus-fix';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutofocusModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { DashboardComponent } from './login/dashboard.component';
import { ReminderComponent } from './reminder/reminder.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    DashboardComponent,
    ReminderComponent
     ],
  imports: [
    BrowserModule,
    FormsModule,
  //   RouterModule.forRoot([{
  //     path: '',
  //     pathMatch: 'full',
  //     redirectTo: 'login'

  //   },
  // {
  //   path: 'login',
  //   loadChildren: './login/login.module#LoginModule'
  // }])
  // ],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

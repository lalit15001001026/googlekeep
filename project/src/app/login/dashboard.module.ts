import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from "../../../node_modules/@angular/core";
import { FormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forChild([{
          path: '',
          component: LoginComponent
      },{
          path: 'signup',
          component: SignupComponent,
      },{
          path: 'dash',
          component: DashboardComponent
      }])
  ],
  declarations: [],
  providers: [],

})

export class DashboardModule{}
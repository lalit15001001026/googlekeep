import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';


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
            component: SignupComponent
        },{
            path: 'dashboard',
            component: DashboardComponent
        }])
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        DashboardComponent
      
    ],
    providers: [
        HttpClientModule
    ]

})

export class LoginModule{}
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('signup') signupform;
  ngOnInit() {

  }
  
  constructor(
    private _http: HttpClient
    ){}

    signup(form){
      this._http.post('http://localhost:5000/user/register', {
        name: form.name,
        email: form.email,
        password: form.password
      }).subscribe((res:any)=>{
        console.log(res)
      })
    }
}

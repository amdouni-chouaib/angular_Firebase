import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { sendPasswordResetEmail } from '@firebase/auth';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  constructor(private auths:AuthserviceService,
    private routes:Router,
    private toast:HotToastService
    ){}
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  submit(){
    if(!this.loginForm.valid){
      return;
    }
    let {email,password} = this.loginForm.value
    this.auths.login(email,password).pipe(
      this.toast.observe({
        success:"Succeessffully Logged In",
        loading:"Loading Please Wait",
        error:"Error "

      })
    ).subscribe(()=>{
      this.routes.navigate(['/dashboard'])
    })
  }
}

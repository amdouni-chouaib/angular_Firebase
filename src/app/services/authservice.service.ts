import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 
  constructor(private auth:Auth) { }
  currentUser=authState(this.auth)
  login(email:any,password:any){
    return from(signInWithEmailAndPassword(this.auth,email,password))
  }
  register(email:any,password:any){
    return from(createUserWithEmailAndPassword(this.auth,email,password))
  }
  logout(){
    return from(this.auth.signOut())
  }

}

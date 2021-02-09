import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


const TOKEN_KEY = 'auth-token';
const LOGIN_URL = 'login-back-url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user_token: any;
  authenticationState = new BehaviorSubject(false);
  
  constructor(private storage: Storage, private plt: Platform, private router:Router) { }
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.user_token = res;
        this.authenticationState.next(true);
      }
    })
  }

  set_login_back_url(URL: string){
    this.storage.set(LOGIN_URL, `${URL}`);  

  }

  getToken(){
    return this.storage.get(TOKEN_KEY).then(v => {
      return v;
    })
  }
 
  login(TOKEN_VALUE: string) {
    return this.storage.set(TOKEN_KEY, `${TOKEN_VALUE}`).then(() => {
      this.user_token = TOKEN_VALUE;
      this.authenticationState.next(true);
      
    });
  }
 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
      this.router.navigateByUrl('signin');
    });
  }
 
  isAuthenticated() {
    console.log(this.authenticationState.value);
    return this.authenticationState.value;
  }
}


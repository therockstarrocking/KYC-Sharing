import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { LoginUserInfoService } from './login_user_info_service';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private ls:LoginUserInfoService,private route: ActivatedRoute,private router: Router){}
  canActivate() {
    console.log('i am checking to see if you are logged in');
    if(!this.ls.isLoggedIn()){
      alert("not authorised")
      this.router.navigate(['home']);
    }
    return this.ls.isLoggedIn();
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}
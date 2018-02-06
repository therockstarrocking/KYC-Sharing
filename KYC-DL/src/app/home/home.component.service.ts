import { Injectable } from '@angular/core';
import { LoginUserInfoService } from '../login_user_info_service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()

export class HomeComponentService {
    constructor(private ls:LoginUserInfoService){

    }
    public setUser(user){
        this.ls.setUser(user);
    }
}
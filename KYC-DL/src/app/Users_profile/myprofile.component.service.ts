import { Injectable } from '@angular/core';
import { LoginUserInfoService } from '../login_user_info_service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()

export class MyProfileService {
    constructor(private ls:LoginUserInfoService){

    }
    public getUser(){
        return this.ls.getUser();
    }

    public getkycinformation(){
        return this.ls.get_kyc_deatils();
    }
}
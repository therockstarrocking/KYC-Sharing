import { Injectable } from '@angular/core';

@Injectable()
export class LoginUserInfoService {
    private userDetails:any;
    public setUser(user){
        this.userDetails = user;
    }
    public getUser(){
        return this.userDetails;
    }
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class LoginUserInfoService {
    private userDetails:any;
    private headers: Headers;
	private accessToken = "yaAbLGV5gi2TktrjHsESlSS9H2yRBmZ2S4d6ahSUriqhNhwQ1ibpwMLWhgGZgzHe";
    constructor(private http: Http,private route: ActivatedRoute,private router: Router){
		
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
		this.headers.append('X-Access-Token',this.accessToken);
	}
  
    public setUser(user){
        this.userDetails = user;
    }
    public getUser(){
          return this.userDetails;
    }
    public isLoggedIn(){
        if(this.userDetails){
            return true;
        }else{
            return false;
        }
    }
    public get_kyc_deatils():any{
        var options = new RequestOptions({headers : this.headers})
        var kycid =  this.userDetails.kyc_id.split('#');
        var userType = kycid[1];
        return this.http.get('http://localhost:3000/api/KYC_Details/'+userType+'',options).map(this.extractData);
    }
    private extractData(res: Response): any {
        return res.json();
    }
    public getToken(){
        return this.accessToken;
    }
    public logout(){
        this.userDetails = null;
        this.router.navigate(['home']);
    }
 
}
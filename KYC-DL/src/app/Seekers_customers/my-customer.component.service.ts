import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { LoginUserInfoService } from '../login_user_info_service';
import { Observable } from 'rxjs/Observable';
import { KYC_Details } from '../org.acme.kyc';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class CustomersService {
    private headers: Headers;
    private options:RequestOptions;
	constructor(private ls:LoginUserInfoService,private http: Http){
		var accessToken = this.ls.getToken();
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('X-Access-Token',accessToken);
        this.options = new RequestOptions({headers : this.headers});
	}
    public getAllCustomers(){
        return this.http.get('http://localhost:3000/api/KYC_Details',this.options).map(res=>res.json())
    }  
    private extractData(res: Response): any {
        return res.json();
    }
    public getUser(userid){
        return this.http.get('http://localhost:3000/api/User/'+userid+'',this.options).map(res => res.json())
    }
    public getkycdetails(kycid){
        return this.http.get('http://localhost:3000/api/KYC_Details/'+kycid+'',this.options).map(res => res.json())
        
    }
}

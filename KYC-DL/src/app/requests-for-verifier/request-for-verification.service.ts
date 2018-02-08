import { Injectable } from '@angular/core';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';

@Injectable()

export class RequestsForVerificationService {
    private requests:any;
    private headers:Headers;
    private accessToken = "orK0zjnv50BboAIeLU5nBbKjgQ1kuvLtA1vajwLupxVJaCaDdofCC6RL9DZLSt3l";
    private options:RequestOptions;
    constructor(private http:Http){ 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('X-Access-Token',this.accessToken);
        this.options = new RequestOptions({headers : this.headers});
    }
    public getAllRequests(){
        return this.http.get('http://localhost:3000/api/Aadhar_verifications',this.options).map(res=>res.json())
    }
    public getKycDetails(kycId){
        return this.http.get('http://localhost:3000/api/KYC_Details/'+kycId,this.options).map(res =>res.json())
    }
    public getUserDetails(user){
        return this.http.get('http://localhost:3000/api/User/'+user,this.options).map(res =>res.json())
    }

}
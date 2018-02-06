import { Injectable } from '@angular/core';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';

@Injectable()

export class RequestsForVerificationService {
    private requests:any;
    private headers:Headers;
    private accessToken = "IG8IPycbvO4cQ31nWU5eGqTkNJgvcWiIoeydr2WXrAFXpZd5dS2KErxnnHBrAcww";
    private options:RequestOptions;
    constructor(private http:Http){ 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('X-Access-Token',this.accessToken);
        this.options = new RequestOptions({headers : this.headers})
    }
   
    

    public getAllRequests(){
        return this.http.get('http://localhost:3000/api/Aadhar_verifications',this.options).map(res=> res.json())
    }
}
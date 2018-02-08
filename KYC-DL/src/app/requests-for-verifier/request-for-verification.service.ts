import { Injectable } from '@angular/core';
import { LoginUserInfoService } from '../login_user_info_service';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';

@Injectable()

export class RequestsForVerificationService {
    private requests:any;
    private headers:Headers;
    private verifierUrls:any;
    private accessToken = "orK0zjnv50BboAIeLU5nBbKjgQ1kuvLtA1vajwLupxVJaCaDdofCC6RL9DZLSt3l";
    private options:RequestOptions;
    constructor(private ls:LoginUserInfoService,private http:Http){ 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('X-Access-Token',this.accessToken);
        this.options = new RequestOptions({headers : this.headers});
        var temp = this.ls.getUser()
        var vType = temp.$class.split(".")
        if(vType[3] == "Aadhar_Admin"){
            this.verifierUrls = ["Aadhar_verifications","Update_AadharStatus"]
        }else if(vType[3] == "Passport_Admin"){
            this.verifierUrls = ["Passport_verifications","Update_PassportStatus"]
        }
    }
    public getUser(){
        return this.ls.getUser();
    }
    public getAllRequests(){
        return this.http.get('http://localhost:3000/api/'+this.verifierUrls[0]+'',this.options).map(res=>res.json())
    }
    public getKycDetails(kycId){
        return this.http.get('http://localhost:3000/api/KYC_Details/'+kycId,this.options).map(res =>res.json())
    }
    public getUserDetails(user){
        return this.http.get('http://localhost:3000/api/User/'+user,this.options).map(res =>res.json())
    }
    public updateAadharStatus(form){
        return this.http.post('http://localhost:3000/api/'+this.verifierUrls[1]+'',form,this.options).map(res =>res.json())
    }

}
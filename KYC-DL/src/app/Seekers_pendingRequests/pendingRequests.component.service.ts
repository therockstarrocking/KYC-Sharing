import { Injectable } from '@angular/core';
import { LoginUserInfoService } from '../login_user_info_service';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';

@Injectable()

export class PendingRequestsService {
    private headers:Headers;
    private options:RequestOptions;
    constructor(private ls:LoginUserInfoService,private http:Http){ 
        this.headers = new Headers();
        var accessToken = this.ls.getToken();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('X-Access-Token',accessToken);
        this.options = new RequestOptions({headers : this.headers});
    }

    public getPendingRequests(){
        return this.http.get('http://localhost:3000/api/Kyc_Seekers_Requests',this.options).map(res=>res.json());
    }
}
import { Injectable } from '@angular/core';
import { LoginUserInfoService } from '../login_user_info_service';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class KycseekerService {
    private headers:Headers;
    private accessToken = "orK0zjnv50BboAIeLU5nBbKjgQ1kuvLtA1vajwLupxVJaCaDdofCC6RL9DZLSt3l";
    private options:RequestOptions;
    constructor(private ls:LoginUserInfoService,private http:Http){ 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('X-Access-Token',this.accessToken);
        this.options = new RequestOptions({headers : this.headers});
    }

    public askForKyc(userID){
        return this.http.post('http://localhost:3000/api/AskForKycDetails',userID,this.options).map(res=> res.json())
    }
    public checkUser(userId){
        return this.http.get('http://localhost:3000/api/User/'+userId+'',this.options).map(res => res.json()).catch(this.handleError);
    }
    private handleError(error: any): Observable<string> {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        alert("no User found in the network")
        return Observable.throw(errMsg);
    }
}
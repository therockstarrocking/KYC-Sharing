import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { KYC_Details } from '../org.acme.kyc';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class KYC_DetailsService {
  private headers: Headers;
	private accessToken = "2AoiIjtLekBbbEv1zTstitTcdrzV14jGXYKfHVUdRKjxlCJ1VTVeVbFjRsScHZwr";
	constructor(private dataService: DataService<any>,private http: Http){
		
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
		this.headers.append('X-Access-Token',this.accessToken);
	}
  public send_kyc_request_transaction(data){
    var options = new RequestOptions({headers : this.headers})
    this.http.post('http://localhost:3000/api/Send_for_KYC_approval',data,options).map(this.extractData).subscribe(res =>{
      console.log("REsult: ",res);
    })
  }

  public get_kyc_deatils():any{
    var options = new RequestOptions({headers : this.headers})
   return this.http.get('http://localhost:3000/api/Send_for_KYC_approval',options).map(this.extractData);
  }
  private extractData(res: Response): any {
    return res.json();
  }
}

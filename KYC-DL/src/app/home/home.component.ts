import { Component } from '@angular/core';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';
import { FormBuilder,FormControl,FormArray, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { HomeComponentService } from './home.component.service'

@Component({
	selector: 'app-home',
	styleUrls: ['./home.component.css'],
	templateUrl: './home.component.html',
	providers: [HomeComponentService]
})
export class HomeComponent {
	private headers: Headers;
	private accessToken = "jVc7d80s11CWNfC4rg1QzXN0pA15T5y7cqanbAWmCFND2ebjqYFnNaH6aFy4gECt";
	constructor(private dataService: DataService<any>,private http: Http,public fb: FormBuilder,private route: ActivatedRoute,
        private router: Router,private hs:HomeComponentService){
		
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
		this.headers.append('X-Access-Token',this.accessToken);
	}
	public loginForm = this.fb.group({
		userCard:["",Validators.required]
	});
	private extractData(res: Response): any {
        return res.json();
    }
	enroll(){
		//this.router.navigate([ 'KYC_Details'], { relativeTo: this.route });
		var options = new RequestOptions({headers : this.headers})
		this.http.post('http://localhost:3000/api/wallet/'+this.loginForm.controls.userCard.value+'/setDefault',options,{ withCredentials: true })
		.map(this.extractData).subscribe(res=>{
			console.log(res)
			if(res != null){
				alert("registration failed");
			}else if(res == null){
				this.http.get('http://localhost:3000/api/system/ping',options)
				.map(this.extractData).subscribe(pingData=>{
					console.log("pingData",pingData);
					var userData = pingData.participant.split('#');
					var userType = userData[0].split(".");
					console.log(userData,userType);
					this.http.get('http://localhost:3000/api/'+userType[3]+'/'+userData[1]+'',options)
					.map(this.extractData).subscribe(userDetails=>{
						console.log("pingData",userDetails);
						alert(userDetails.name)
						this.hs.setUser(userDetails);
						this.router.navigate(['user']);
					})
				})
			}
		})
	}

}

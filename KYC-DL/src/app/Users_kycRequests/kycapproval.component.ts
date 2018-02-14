import { Component, OnInit } from '@angular/core';
import {KycsharedService} from './kyc_services';

@Component({
  selector: 'app-kycapproval',
  templateUrl: './kycapproval.component.html',
  styleUrls: ['./kycapproval.component.css'],
  providers:[KycsharedService]
})
export class KycapprovalComponent implements OnInit {

  constructor(private kycrequests:KycsharedService) { }
  public requestedid;
  requests:any

  ngOnInit() {
    this.getAllRequests();
  }
  getAllRequests(){
    this.requests=[];
    this.kycrequests.getKycRequests().subscribe(res=>{
      this.requestedid=res;
      console.log(this.requestedid);
      for (let i=0;i<this.requestedid.length;i++){ 
        if(this.requestedid[i].status =='REQUESTED'){
          var seekerid = this.requestedid[i].KYC_Seeker_ID.split('#');
          this.kycrequests.kycseekerinfo(seekerid[1]).subscribe(res=>{
            var data=res;
            this.requestedid[i].kycSeekerDetails = data;
            this.requests.push(this.requestedid[i])
            console.log("requests",this.requests)
          })
        }
      }
      console.log(this.requests);
    })
      
  }
  response(response:any,index){
    console.log(index);
    var data={
      "Kyc_Seekers_Requests_id":this.requests[index].id,
      "response": response
    }
    this.kycrequests.response(data).subscribe(res =>{
      console.log(" Status Changed:",res);
      this.getAllRequests();
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { PendingRequestsService } from './pendingRequests.component.service'

@Component({
  selector: 'app-kycseeker-pending-requests',
  templateUrl: './kycseeker-pending-requests.component.html',
  styleUrls: ['./kycseeker-pending-requests.component.css'],
  providers:[PendingRequestsService]
})
export class KycseekerPendingRequestsComponent implements OnInit {
  pendingRequests:any;
  constructor( private prs:PendingRequestsService) { }

  ngOnInit() {
    this.pendingRequests = [];
    this.prs.getPendingRequests().subscribe(res=>{
      console.log("got kys seeker :",res);
      for(var i=0; i<res.length;i++){
        if(res[i].status !="APPROVED"){
          let temp = res[i].userid.split("#");
          this.pendingRequests.push(res[i]);
          this.pendingRequests[i].userid = temp[1];
        }
      }
    })
  }

}

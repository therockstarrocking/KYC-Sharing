import { Component, OnInit } from '@angular/core';
import {KycsharingService} from './kycsharing.sevices.component';


@Component({
  selector: 'app-kycshared',
  templateUrl: './kycshared.component.html',
  styleUrls: ['./kycshared.component.css'],
  providers:[KycsharingService]
})
export class KycsharedComponent implements OnInit {

  constructor(private kycshare:KycsharingService) { }
  public  shared;
  sharingWith:any;
  ngOnInit() {
    this.sharingWith = [];
    this.kycshare.getsharingasset().subscribe(res=>{ 
      this.shared=res[0];
      var userData = this.shared.sharingWithIDs;
      for(let i=0;i<=userData.length;i++){
          var userid =userData[i].split('#');
          this.kycshare.getKycseeker(userid[1]).subscribe(res =>{
            this.sharingWith.push(res);
          })
      }
    }); 
  }

}

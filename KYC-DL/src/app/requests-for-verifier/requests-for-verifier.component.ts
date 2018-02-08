import { Component, OnInit, ElementRef } from '@angular/core';
import { RequestsForVerificationService } from './request-for-verification.service';
import { FormBuilder,FormControl,FormArray, Validators } from '@angular/forms';
//import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
//import { DialogDataExampleDialog } from './dialog-data-example'

@Component({
  selector: 'app-requests-for-verifier',
  templateUrl: './requests-for-verifier.component.html',
  styleUrls: ['./requests-for-verifier.component.css'],
  providers:[RequestsForVerificationService]
})
export class RequestsForVerifierComponent implements OnInit {
  requests:any;
  user:any;
  viewDetailsOfUser:any
  constructor(private rfvs:RequestsForVerificationService,public fb: FormBuilder,private element: ElementRef){ }

  public myForm = this.fb.group({
		userCard:["",Validators.required]
	});
  ngOnInit() {
    this.getAllRequests();
  }
  
  getAllRequests(){
  
    this.rfvs.getAllRequests().subscribe(res=>{
     this.requests = res;
      
    })
  }
  viewRequest(index){
    this.viewDetailsOfUser = null;
    var fimage = this.element.nativeElement.querySelector('.faimg');
    var bimage = this.element.nativeElement.querySelector('.baimg');
    fimage.src = null;
    bimage.src = null;
    var requestedUser = this.requests[index].userId;
    var user = requestedUser.split("#");
    var userDetails;
    this.rfvs.getUserDetails(user[1]).subscribe(res =>{
        userDetails = res;
        console.log("userDetails: ",userDetails)
        if(userDetails.kyc_id){
          var kycID = userDetails.kyc_id.split("#")
          this.rfvs.getKycDetails(kycID[1]).subscribe(res=>{
            this.viewDetailsOfUser = res;
            var uId = this.viewDetailsOfUser.kyc_of_userid.split("#");
            this.viewDetailsOfUser.kyc_of_userid = uId[1];
            console.log(" clicked User details : ",this.viewDetailsOfUser);
            var fimage = this.element.nativeElement.querySelector('.faimg');
            var bimage = this.element.nativeElement.querySelector('.baimg');
            fimage.src = this.requests[index].documents_submitted.photocopy ;
            bimage.src = this.requests[index].documents_submitted.photocopy ;
          })
        }else{
          console.log("no kyc_id found")
        }
    });
    
    //this.openDialog()
    //alert(index);
  }

}

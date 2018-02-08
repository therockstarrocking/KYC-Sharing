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
  currentRequestId:any;
  constructor(private rfvs:RequestsForVerificationService,public fb: FormBuilder,private element: ElementRef){ }

  public myForm = this.fb.group({
		userCard:["",Validators.required]
  });
  public updateStatusform = this.fb.group({
    status: ["",Validators.required],
    remarks: ["",Validators.required]
  })
  ngOnInit() {
    this.getAllRequests();
    this.user = this.rfvs.getUser()
  }
  
  getAllRequests(){
  this.requests = [];
    this.rfvs.getAllRequests().subscribe(res=>{
      for(let i=0;i<res.length;i++){
        if(res[i].status != "APPROVED"){
          this.requests.push(res[i])
        }
      } 
    })
  }
  viewRequest(index){
    if(this.user.$class == "org.acme.kyc.Passport_Admin"){
      this.currentRequestId = "resource:org.acme.kyc.Passport_verifications#"+this.requests[index].id+""  
    }else{
      this.currentRequestId = "resource:org.acme.kyc.Aadhar_verifications#"+this.requests[index].id+""
    }
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
  }
  sendUpdateStatus(event){
    /*if(this.updateStatusform.controls['status'].value != "APPROVED" && this.updateStatusform.controls['remarks'].value ==""){
      alert("Please specify your REMARKS");
      return;
    }else{*/
      var updateForm = {};
      //this.updateStatusform.controls['aadhar_verifications_ID'].setValue(this.currentRequestId);
      if(this.user.$class == "org.acme.kyc.Passport_Admin"){
        updateForm = {'passport_verifications_ID':this.currentRequestId,'status':this.updateStatusform.controls['status'].value,'remarks':this.updateStatusform.controls['remarks'].value}
      }
      else{
        updateForm = {'aadhar_verifications_ID':this.currentRequestId,'status':this.updateStatusform.controls['status'].value,'remarks':this.updateStatusform.controls['remarks'].value}
      }
      console.log("form values:",updateForm)
      this.rfvs.updateAadharStatus(updateForm).subscribe(res =>{
        console.log("Response: ",res);
      })
    //}
  }

}

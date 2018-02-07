import { Component, OnInit } from '@angular/core';
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
  constructor(private rfvs:RequestsForVerificationService,public fb: FormBuilder/*,public dialog: MatDialog*/){ }

  public myForm = this.fb.group({
		userCard:["",Validators.required]
	});
  ngOnInit() {
    this.getAllRequests();
  }
  /*openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
       height: '400px',
      width: '600px',
      data: {
        animal: 'Unicorn'
      }
    });
  }*/
  getAllRequests(){
    this.requests = [{
      "$class": "org.acme.kyc.Aadhar_verifications",
      "documents_submitted": {
        "$class": "org.acme.kyc.Documents_checklist",
        "number": "98741265",
        "photocopy": " BASE64",
        "date_Of_issue": "2015-02-02"
      },
      "id": "nu1_65REQUESTED",
      "userId": "resource:org.acme.kyc.User#nu1",
      "status": "REQUESTED"
    },
    {
      "$class": "org.acme.kyc.Aadhar_verifications",
      "documents_submitted": {
        "$class": "org.acme.kyc.Documents_checklist",
        "number": "98741265",
        "photocopy": " BASE64",
        "date_Of_issue": "2015-02-02"
      },
      "id": "nu1_65REQUESTED",
      "userId": "resource:org.acme.kyc.User#nu1",
      "status": "REQUESTED"
    },
    {
      "$class": "org.acme.kyc.Aadhar_verifications",
      "documents_submitted": {
        "$class": "org.acme.kyc.Documents_checklist",
        "number": "98741265",
        "photocopy": " BASE64",
        "date_Of_issue": "2015-02-02"
      },
      "id": "nu1_65REQUESTED",
      "userId": "resource:org.acme.kyc.User#nu1",
      "status": "REQUESTED"
    },
    {
      "$class": "org.acme.kyc.Aadhar_verifications",
      "documents_submitted": {
        "$class": "org.acme.kyc.Documents_checklist",
        "number": "98741265",
        "photocopy": " BASE64",
        "date_Of_issue": "2015-02-02"
      },
      "id": "nu1_65REQUESTED",
      "userId": "resource:org.acme.kyc.User#nu1",
      "status": "REQUESTED"
    },
    {
      "$class": "org.acme.kyc.Aadhar_verifications",
      "documents_submitted": {
        "$class": "org.acme.kyc.Documents_checklist",
        "number": "98741265",
        "photocopy": " BASE64",
        "date_Of_issue": "2015-02-02"
      },
      "id": "nu1_65REQUESTED",
      "userId": "resource:org.acme.kyc.User#nu1",
      "status": "REQUESTED"
    },
    {
      "$class": "org.acme.kyc.Aadhar_verifications",
      "documents_submitted": {
        "$class": "org.acme.kyc.Documents_checklist",
        "number": "98741265",
        "photocopy": " BASE64",
        "date_Of_issue": "2015-02-02"
      },
      "id": "nu1_65REQUESTED",
      "userId": "resource:org.acme.kyc.User#nu1",
      "status": "REQUESTED"
    }];
    this.user = {"kyc_id": "nu1_65_26",
    "kyc_of_userid": "nu1",
    "KYC_Information": {
      "$class": "org.acme.kyc.KYC_Information",
      "name": "RAMANA",
      "gender": "MALE",
      "address": {
        "$class": "org.acme.kyc.Address",
        "nationality": "INDIAN",
        "city": "HYD",
        "Address": " EMPTY NOW ",
        "postal_Code": "9874"
      },
      "birth_details": {
        "$class": "org.acme.kyc.BirthInfo",
        "dateOfBirth": "2015-02-02",
        "birth_place": "KTK"
      }
    }}
    this.rfvs.getAllRequests().subscribe(res=>{
      console.log(res);
      
    })
  }
  viewRequest(index){
    //this.openDialog()
    //alert(index);
  }

}

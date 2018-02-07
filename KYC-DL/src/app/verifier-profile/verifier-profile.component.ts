import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-verifier-profile',
  templateUrl: './verifier-profile.component.html',
  styleUrls: ['./verifier-profile.component.css']
})
export class VerifierProfileComponent implements OnInit {

  requests:any;
  user:any;
  constructor(public fb: FormBuilder/*,public dialog: MatDialog*/){ }

  public myForm = this.fb.group({
		userCard:["",Validators.required]
	});
  ngOnInit() {
    this.getAllRequests();
  }

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
  
}
}

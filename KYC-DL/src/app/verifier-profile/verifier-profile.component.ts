import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormArray, Validators } from '@angular/forms';
import { VerifierProfileComponentService} from './verifier-profile.component.service';

@Component({
  selector: 'app-verifier-profile',
  templateUrl: './verifier-profile.component.html',
  styleUrls: ['./verifier-profile.component.css'],
  providers:[VerifierProfileComponentService]
})
export class VerifierProfileComponent implements OnInit {

  requests:any;
  user:any;
  constructor(private vs:VerifierProfileComponentService){
    
  }

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
    }];

    this.user = this.vs.getUser();
  
}
}

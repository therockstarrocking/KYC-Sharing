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
    this.requests = [];
    this.vs.getAllRequests().subscribe(res=>{
      for(let i=0;i<res.length;i++){
        if(res[i].status == "APPROVED"){
          this.requests.push(res[i])
        }
      } 
    })

    this.user = this.vs.getUser();
  
}
}

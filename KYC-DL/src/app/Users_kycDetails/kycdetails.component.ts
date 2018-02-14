import { Component, OnInit,ElementRef } from '@angular/core';
import { KYC_DetailsService } from 'app/KYC_Details/KYC_Details.service';
import {LoginUserInfoService} from '../login_user_info_service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-kycdetails',
  templateUrl: './kycdetails.component.html',
  styleUrls: ['./kycdetails.component.css'],
  providers:[KYC_DetailsService]
})
export class KycdetailsComponent implements OnInit {

  public data:any;
  public applieddocs:any;
  
  constructor(private kycservice:LoginUserInfoService,private element: ElementRef) {}
 
  ngOnInit(){
    this.kycservice.get_kyc_deatils().subscribe(res =>{
      this.data=res;
      console.log("the kyc id",this.data);
        
      this.applieddocs=this.data.applied_documents_status;
    })    
    this.getRandomColor();  
    this.getRandomColorpass();
  }

  getRandomColor(){

    if(this.applieddocs.aadhar_documents.status =="REQUESTED"){
      var color="orange";
      return color;
    }else if(this.applieddocs.aadhar_documents.status =="APPROVED"){
      var color="green";
      return color;
    }else if(this.applieddocs.aadhar_documents.status =="DENIED"){
      var color="red";
      return color;
    }else {
      var color="grey";
      return color;
    }
  }
  public getRandomColorpass(){

    if(this.applieddocs.passport_documents.status =="REQUESTED"){
      var color="orange";
      return color;
    }else if(this.applieddocs.passport_documents.status =="APPROVED"){
      var color="green";
      return color;
    }else if(this.applieddocs.passport_documents.status =="DENIED"){
      var color="red";
      return color;
    }else {
      var color="grey";
      return color;
    }
  }

  viewRequest(name:any){

    var image1= this.element.nativeElement.querySelector('#modalimage1');
    var image2= this.element.nativeElement.querySelector('#modalimage2');
    if(this.applieddocs.aadhar_documents.document_name == name){
      image1.src=this.applieddocs.aadhar_documents.documents_submitted.photocopy;
      image2.src=this.applieddocs.aadhar_documents.documents_submitted.photocopy;
    }else if(this.applieddocs.passport_documents.document_name == name){
      image1.src=this.applieddocs.passport_documents.documents_submitted.photocopy;
      image2.src=this.applieddocs.passport_documents.documents_submitted.photocopy;
    }
  }    

}

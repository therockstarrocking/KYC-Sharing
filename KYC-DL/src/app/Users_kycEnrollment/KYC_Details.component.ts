import { Component, OnInit, Input, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { KYC_DetailsService } from './KYC_Details.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-KYC_Details',
	templateUrl: './KYC_Details.component.html',
	styleUrls: ['./KYC_Details.component.css'],
  providers: [KYC_DetailsService] 
})
export class KYC_DetailsComponent implements OnInit {


  constructor(private fb: FormBuilder,private element: ElementRef,private kds:KYC_DetailsService){
  }


  kyc_form: FormGroup;
  apic:String;
  ppic:String;
  ngOnInit(){
    this.kyc_form=this.fb.group({
      $class: "org.acme.kyc.Send_for_KYC_approval",
      KYC_Information:this.fb.group({
        $class: "org.acme.kyc.KYC_Information",
        name: ["",Validators.required],
        gender: ["",Validators.required],
        address:this.fb.group({
          nationality:["",Validators.required],
          city:["",Validators.required],
          Address:["",Validators.required],
          postal_Code:["",Validators.required]
        }),
        birth_details:this.fb.group({
          $class: "org.acme.kyc.BirthInfo",
          dateOfBirth: ["",Validators.required],
          birth_place:["",Validators.required]
        })
      }),
      Documents:this.fb.group({
        $class: "org.acme.kyc.Documents_status",
        aadhar_documents: this.fb.group({
          $class:"org.acme.kyc.Aadhar_Documents",
          document_name:"AADHAR",
          documents_submitted:this.fb.group({
            $class: "org.acme.kyc.Documents_checklist",
            number:["",Validators.required] ,
            photocopy: ["",Validators.required],
            date_Of_issue:["",Validators.required] 
          })
        }),
        passport_documents :this.fb.group({
          $class : "org.acme.kyc.Passport_Documents",
          document_name : "PASSPORT"  ,
          documents_submitted : this.fb.group({
            $class :  "org.acme.kyc.Documents_checklist",
            number:["",Validators.required] ,
            photocopy: ["",Validators.required],
            date_Of_issue:["",Validators.required] 
          },{updateOn: 'submit'})
        })
      })
    });
  }
showFiles(type){
  this.element.nativeElement.querySelector('.'+type+'').click();
}
  changeListner(event,picName) {
    var reader = new FileReader();
    var image = this.element.nativeElement.querySelector('.'+picName+'');
    var temp;
    reader.onload = function(e) {  
        temp = reader.result;
        console.log(temp);
        image.src=reader.result;
        
    };
    reader.readAsDataURL(event.target.files[0]);
    //console.log("image",temp)
    setTimeout(()=>{
      if(picName == "ppic"){
        this.ppic = temp;
        console.log("profile pic :",this.ppic)
      }else if(picName == "aimg"){
        this.apic = temp;
        console.log("profile pic :",this.apic)
      }
    },500)
    
  }
  send_kyc_request(event){
    this.kyc_form.patchValue({Documents:{aadhar_documents:{documents_submitted:{photocopy: this.apic}}}})
    this.kyc_form.patchValue({Documents:{passport_documents:{documents_submitted:{photocopy: this.ppic}}}})
    console.log(this.kyc_form.value);
    this.kds.send_kyc_request_transaction(this.kyc_form.value);

  }
  
  }


         
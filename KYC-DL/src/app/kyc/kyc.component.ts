import { Component, OnInit,ElementRef } from '@angular/core';
import { KycseekerService } from './kycseeker.component.service';
import {Router,Route, ActivatedRoute} from '@angular/router'
import { FormBuilder,FormControl,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css'],
  providers:[KycseekerService]
})
export class KycComponent implements OnInit {
  kyc_id:any;
  constructor(private ks:KycseekerService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private element: ElementRef) { }
  public askKycForm = this.fb.group({
		userId:["",Validators.required]
  });
  ngOnInit() {
  }

  requestKyc(event){
    this.ks.checkUser(this.askKycForm.controls['userId'].value).subscribe(res=>{
        this.ks.askForKyc(this.askKycForm.value).subscribe(res=>{
          console.log(res);
          if(res!=""){
            this.element.nativeElement.querySelector('.cls').click();
            this.router.navigate(['pendingreq'],{relativeTo:this.route})
            alert("requested");
          }
        })
    })
    
    //console.log(this.askKycForm.value);
  }

}

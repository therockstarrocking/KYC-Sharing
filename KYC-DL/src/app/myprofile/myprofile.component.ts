import { Component, OnInit,ElementRef } from '@angular/core';
import { MyProfileService } from './myprofile.component.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
  providers:[MyProfileService]
})
export class MyprofileComponent implements OnInit {
  userdetails:any;
  userKYInformation:any
  constructor(private profileService:MyProfileService,private element: ElementRef) { }

  ngOnInit() {
    this.userdetails = this.profileService.getUser();
    var image = this.element.nativeElement.querySelector('.dp');
    image.src = this.userdetails.profile_picture ;
    this.profileService.getkycinformation().subscribe(res=>{
     
      this.userKYInformation=res.KYC_Information;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    })
  }

}

import { Component, OnInit,ElementRef } from '@angular/core';
import { MyProfileService } from './myprofile.component.service'

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
  providers:[MyProfileService]
})
export class MyprofileComponent implements OnInit {
  userdetails:any;
  constructor(private profileService:MyProfileService,private element: ElementRef) { }

  ngOnInit() {
    this.userdetails = this.profileService.getUser();
    var image = this.element.nativeElement.querySelector('.dp');
    image.src = this.userdetails.profile_picture ;
  }

}

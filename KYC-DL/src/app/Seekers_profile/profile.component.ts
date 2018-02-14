import { Component, OnInit } from '@angular/core';
import { kycseekerProflieService } from './profile.component.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[kycseekerProflieService]
})
export class ProfileComponent implements OnInit {
  kycSeeker:any;
  constructor(private kps:kycseekerProflieService) { }

  ngOnInit() {
      this.kycSeeker = this.kps.getProfileDetails()
  }

}

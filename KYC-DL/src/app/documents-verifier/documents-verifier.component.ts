import { Component, OnInit } from '@angular/core';
import { LoginUserInfoService } from '../login_user_info_service';

@Component({
  selector: 'app-documents-verifier',
  templateUrl: './documents-verifier.component.html',
  styleUrls: ['./documents-verifier.component.css']
})
export class DocumentsVerifierComponent implements OnInit {
  userDetails:any;
  constructor(private ls:LoginUserInfoService) { }

  ngOnInit() {
    this.userDetails = this.ls.getUser();
    console.log("Administrator Details: ",this.userDetails);
  }

}

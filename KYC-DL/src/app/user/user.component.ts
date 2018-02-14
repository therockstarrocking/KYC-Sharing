import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserComponentService } from './user.component.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserComponentService]
})
export class UserComponent implements OnInit {
  userDetails:any;
  constructor(private router:Router,private us:UserComponentService) {
   this.userDetails = us.getUser();
  }
  ngOnInit() {
    //this.router.navigate(['../myprofile'])
  }
  logout(){
    this.us.logout();
  }

}


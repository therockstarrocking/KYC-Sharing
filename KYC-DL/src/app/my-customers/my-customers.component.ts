import { Component, OnInit } from '@angular/core';
import { CustomersService } from './my-customer.component.service'

@Component({
  selector: 'app-my-customers',
  templateUrl: './my-customers.component.html',
  styleUrls: ['./my-customers.component.css'],
  providers:[CustomersService]
})
export class MyCustomersComponent implements OnInit {
  user:any;
  userDetails:any
  constructor(private cs:CustomersService) { 

  }

  ngOnInit() {
    this.user = [];
    this.cs.getAllCustomers().subscribe(res=>{
      console.log("all Customers :",res);
      this.userDetails = res;
      for(let i=0;i<this.userDetails.length;i++){
        let temp = this.userDetails[i].kyc_of_userid.split('#');
        this.cs.getUser(temp[1]).subscribe(user =>{
          this.user.push(user);
          console.log(this.user);
        })
      }
    })
  }
  //http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png
//user =[{}]
 }

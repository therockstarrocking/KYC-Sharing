import { Component, OnInit ,ElementRef} from '@angular/core';
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
  individualdata:any
  customerInfo:any;
  constructor(private cs:CustomersService,private element: ElementRef) { 

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
  viewDetails(index){
    var id=this.userDetails[index].kyc_id;
      this.cs.getkycdetails(id).subscribe(res=>{
      var data=res;
      let userID = data.kyc_of_userid.split("#")
      this.customerInfo = data;
      this.customerInfo.kyc_of_userid = userID[1];
      this.individualdata=data.applied_documents_status;
   
    var image = this.element.nativeElement.querySelector('.faimg');
    var image1 = this.element.nativeElement.querySelector('.baimg');

    image.src=this.individualdata.aadhar_documents.documents_submitted.photocopy;
    image1.src=this.individualdata.passport_documents.documents_submitted.photocopy;
  }) 
  }
  //http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png
//user =[{}]
 }

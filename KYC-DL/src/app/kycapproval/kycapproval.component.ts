import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kycapproval',
  templateUrl: './kycapproval.component.html',
  styleUrls: ['./kycapproval.component.css']
})
export class KycapprovalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  array=[{id:'1',orgnationname:'archents',seekername:'sai',alloweddate:'12-45-8777'},
  {id:'2',orgnationname:'infosy',seekername:'omk',alloweddate:'12-45-8777'},
  {id:'3',orgnationname:'archents',seekername:'dea',alloweddate:'12-45-8777'},
  {id:'4',orgnationname:'archents',seekername:'ghyt',alloweddate:'12-45-8777'}
]
}

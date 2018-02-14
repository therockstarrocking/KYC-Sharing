import { Component, OnInit } from '@angular/core';
import {Router,Route, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['info'],{relativeTo:this.route})
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import{MyCustomersComponent} from './my-customers/my-customers.component'
import {KycComponent} from './kyc/kyc.component';
import { KYC_DetailsComponent } from './KYC_Details/KYC_Details.component';
import { KycdetailsComponent } from './kycdetails/kycdetails.component'
import {KycsharedComponent} from './kycshared/kycshared.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {KycapprovalComponent} from './kycapproval/kycapproval.component'
import { Kyc_Seekers_RequestsComponent } from './Kyc_Seekers_Requests/Kyc_Seekers_Requests.component';
import { DocumentsVerifierComponent } from './documents-verifier/documents-verifier.component';
import { VerifierProfileComponent } from './verifier-profile/verifier-profile.component';
import { RequestsForVerifierComponent } from './requests-for-verifier/requests-for-verifier.component';
const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: 'home', component: HomeComponent},
	
	{path:'user' ,component:UserComponent,children:[
		{path:'',pathMatch:'full',redirectTo:'profile'},
		{path:'profile',component:DashboardComponent,
			children:[
			  {path: 'mykyc', component: KycdetailsComponent},
			  {path: 'sharingWith', component: KycsharedComponent},
			  {path: 'info', component: MyprofileComponent}
			]   
			},
			{path: 'KYC_Details', component: KYC_DetailsComponent},
			{path: 'kyc_approval', component: KycapprovalComponent}
			
		  ]},		
	
	{ path: 'verifier', component: DocumentsVerifierComponent,children:[
		{path:'profile',component:VerifierProfileComponent},
		{ path:'requests', component: RequestsForVerifierComponent},
		{ path:'',redirectTo:'profile', pathMatch:'full'}
	]},
	
	{path:'kycSeeker',component:KycComponent,children:[
		{path:'profile',component:ProfileComponent},
		{path:'my-customers',component:MyCustomersComponent},
		{path:'',redirectTo:'profile', pathMatch:'full'}
	]},
	{path: '**', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

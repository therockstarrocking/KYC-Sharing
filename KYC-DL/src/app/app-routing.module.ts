import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';
import {ProfileComponent} from './Seekers_profile/profile.component';
import {MyCustomersComponent} from './Seekers_customers/my-customers.component';
import { DocumentsVerifierComponent } from './Verifier_landingPage/documents-verifier.component';
import { VerifierProfileComponent } from './Verifier_profile/verifier-profile.component';
import { RequestsForVerifierComponent } from './Verifier_Requests/requests-for-verifier.component';
import { KYC_DetailsComponent } from './Users_kycEnrollment/KYC_Details.component';
import { KycdetailsComponent } from './Users_kycDetails/kycdetails.component'
import {KycsharedComponent} from './Users_kycSharing/kycshared.component';
import {MyprofileComponent} from './Users_profile/myprofile.component';
import {UserComponent} from './Users_landingPage/user.component';
import {DashboardComponent} from './Users_main_dashboard/dashboard.component';
import {KycapprovalComponent} from './Users_kycRequests/kycapproval.component';
import {KycComponent} from './Seekers_landingPage/kyc.component';
import { KycseekerPendingRequestsComponent } from './Seekers_pendingRequests/kycseeker-pending-requests.component';
import { AuthGuardService } from './authgaurd.service';
const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: 'home', component: HomeComponent},
	
	{path:'user' ,component:UserComponent,canActivate: [AuthGuardService],children:[
		{path:'',pathMatch:'full',redirectTo:'profile',canActivate: [AuthGuardService]},
		{path:'profile',component:DashboardComponent,canActivate: [AuthGuardService],
			children:[
			  {path: 'mykyc', component: KycdetailsComponent},
			  {path: 'sharingWith', component: KycsharedComponent},
			  {path: 'info', component: MyprofileComponent}
			]   
			},
			{path: 'KYC_Details', component: KYC_DetailsComponent},
			{path: 'kyc_approval', component: KycapprovalComponent}
			
		  ]},		
	
	{ path: 'verifier', component: DocumentsVerifierComponent,canActivate: [AuthGuardService],children:[
		{path:'profile',component:VerifierProfileComponent},
		{ path:'requests', component: RequestsForVerifierComponent},
		{ path:'',redirectTo:'profile', pathMatch:'full'}
	]},
	
	{path:'kycSeeker',component:KycComponent,canActivate: [AuthGuardService],children:[
		{path:'profile',component:ProfileComponent},
		{path:'my-customers',component:MyCustomersComponent},
		{path:'pendingreq',component:KycseekerPendingRequestsComponent},
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { KYC_DetailsComponent } from './KYC_Details/KYC_Details.component';
import { SharingAssetComponent } from './SharingAsset/SharingAsset.component';
import { Kyc_Seekers_RequestsComponent } from './Kyc_Seekers_Requests/Kyc_Seekers_Requests.component';
import { Aadhar_verificationsComponent } from './Aadhar_verifications/Aadhar_verifications.component';
import { Passport_verificationsComponent } from './Passport_verifications/Passport_verifications.component';
import { UserComponent } from './user/user.component';
import { DocumentsVerifierComponent } from './documents-verifier/documents-verifier.component';
import { VerifierProfileComponent } from './verifier-profile/verifier-profile.component';
import { RequestsForVerifierComponent } from './requests-for-verifier/requests-for-verifier.component';
const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: 'home', component: HomeComponent},
	
	{ path: 'SharingAsset', component: SharingAssetComponent},
	
	{ path: 'user', component: UserComponent},
	
	{ path: 'verifier', component: DocumentsVerifierComponent,children:[
		{path:'profile',component:VerifierProfileComponent},
		{ path:'requests', component: RequestsForVerifierComponent},
		{ path:'',redirectTo:'profile', pathMatch:'full'}
	]},
	
	{ path: 'Passport_verifications', component: Passport_verificationsComponent},
	
	{path: '**', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

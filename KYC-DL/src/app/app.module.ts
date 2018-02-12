import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { MaterialModule} from '@angular/material';
//import { MatDialogModule } from '@angular/material';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { LoginUserInfoService } from'./login_user_info_service'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { DialogDataExampleDialog } from './requests-for-verifier/dialog-data-example'
// import { TransactionComponent } from './Transaction/Transaction.component'

import {ProfileComponent} from './profile/profile.component';
import {MyCustomersComponent} from './my-customers/my-customers.component';
import { Kyc_Seekers_RequestsComponent } from './Kyc_Seekers_Requests/Kyc_Seekers_Requests.component';
import { DocumentsVerifierComponent } from './documents-verifier/documents-verifier.component';
import { VerifierProfileComponent } from './verifier-profile/verifier-profile.component';
import { RequestsForVerifierComponent } from './requests-for-verifier/requests-for-verifier.component';
import { KYC_DetailsComponent } from './KYC_Details/KYC_Details.component';
import { KycdetailsComponent } from './kycdetails/kycdetails.component'
import {KycsharedComponent} from './kycshared/kycshared.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {KycapprovalComponent} from './kycapproval/kycapproval.component';
import {KycComponent} from './kyc/kyc.component';
import { KycseekerPendingRequestsComponent } from './kycseeker-pending-requests/kycseeker-pending-requests.component';
import { AuthGuardService } from './authgaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    // TransactionComponent,
    KYC_DetailsComponent,
		Kyc_Seekers_RequestsComponent,
		DocumentsVerifierComponent,
		
    VerifierProfileComponent,
		
    RequestsForVerifierComponent,
    //DialogDataExampleDialog
    KycapprovalComponent,
    DashboardComponent,
    MyprofileComponent,
    KycsharedComponent,
    KycdetailsComponent,
    KYC_DetailsComponent,
    KycComponent,
    MyCustomersComponent,
    ProfileComponent,
    KycseekerPendingRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule/*,
    MatDialogModule,
    BrowserAnimationsModule*/
  ],
  providers: [
    Configuration,
    DataService,
    LoginUserInfoService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

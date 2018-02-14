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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    // TransactionComponent,
    KYC_DetailsComponent,
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

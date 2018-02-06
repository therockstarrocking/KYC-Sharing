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
import { UserComponent } from './user/user.component';
//import { DialogDataExampleDialog } from './requests-for-verifier/dialog-data-example'
// import { TransactionComponent } from './Transaction/Transaction.component'

import { KYC_DetailsComponent } from './KYC_Details/KYC_Details.component';
import { SharingAssetComponent } from './SharingAsset/SharingAsset.component';
import { Kyc_Seekers_RequestsComponent } from './Kyc_Seekers_Requests/Kyc_Seekers_Requests.component';
import { Aadhar_verificationsComponent } from './Aadhar_verifications/Aadhar_verifications.component';
import { Passport_verificationsComponent } from './Passport_verifications/Passport_verifications.component';
import { DocumentsVerifierComponent } from './documents-verifier/documents-verifier.component';
import { VerifierProfileComponent } from './verifier-profile/verifier-profile.component';
import { RequestsForVerifierComponent } from './requests-for-verifier/requests-for-verifier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    // TransactionComponent,
    KYC_DetailsComponent,
		SharingAssetComponent,
		Kyc_Seekers_RequestsComponent,
		Aadhar_verificationsComponent,
		
    Passport_verificationsComponent,
		
    DocumentsVerifierComponent,
		
    VerifierProfileComponent,
		
    RequestsForVerifierComponent
    //DialogDataExampleDialog
		
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
    LoginUserInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

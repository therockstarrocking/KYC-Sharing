import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { KYC_DetailsService } from './KYC_Details.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-KYC_Details',
	templateUrl: './KYC_Details.component.html',
	styleUrls: ['./KYC_Details.component.css'],
  providers: [KYC_DetailsService]
})
export class KYC_DetailsComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          kyc_id = new FormControl("", Validators.required);
        
  
      
          kyc_of_userid = new FormControl("", Validators.required);
        
  
      
          KYC_Information = new FormControl("", Validators.required);
        
  
      
          applied_documents_status = new FormControl("", Validators.required);
        
  
      
          KYC_status = new FormControl("", Validators.required);
        
  


  constructor(private serviceKYC_Details:KYC_DetailsService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          kyc_id:this.kyc_id,
        
    
        
          kyc_of_userid:this.kyc_of_userid,
        
    
        
          KYC_Information:this.KYC_Information,
        
    
        
          applied_documents_status:this.applied_documents_status,
        
    
        
          KYC_status:this.KYC_status
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceKYC_Details.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.kyc.KYC_Details",
      
        
          "kyc_id":this.kyc_id.value,
        
      
        
          "kyc_of_userid":this.kyc_of_userid.value,
        
      
        
          "KYC_Information":this.KYC_Information.value,
        
      
        
          "applied_documents_status":this.applied_documents_status.value,
        
      
        
          "KYC_status":this.KYC_status.value
        
      
    };

    this.myForm.setValue({
      
        
          "kyc_id":null,
        
      
        
          "kyc_of_userid":null,
        
      
        
          "KYC_Information":null,
        
      
        
          "applied_documents_status":null,
        
      
        
          "KYC_status":null
        
      
    });

    return this.serviceKYC_Details.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "kyc_id":null,
        
      
        
          "kyc_of_userid":null,
        
      
        
          "KYC_Information":null,
        
      
        
          "applied_documents_status":null,
        
      
        
          "KYC_status":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.kyc.KYC_Details",
      
        
          
        
    
        
          
            "kyc_of_userid":this.kyc_of_userid.value,
          
        
    
        
          
            "KYC_Information":this.KYC_Information.value,
          
        
    
        
          
            "applied_documents_status":this.applied_documents_status.value,
          
        
    
        
          
            "KYC_status":this.KYC_status.value
          
        
    
    };

    return this.serviceKYC_Details.updateAsset(form.get("kyc_id").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceKYC_Details.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceKYC_Details.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "kyc_id":null,
          
        
          
            "kyc_of_userid":null,
          
        
          
            "KYC_Information":null,
          
        
          
            "applied_documents_status":null,
          
        
          
            "KYC_status":null 
          
        
      };



      
        if(result.kyc_id){
          
            formObject.kyc_id = result.kyc_id;
          
        }else{
          formObject.kyc_id = null;
        }
      
        if(result.kyc_of_userid){
          
            formObject.kyc_of_userid = result.kyc_of_userid;
          
        }else{
          formObject.kyc_of_userid = null;
        }
      
        if(result.KYC_Information){
          
            formObject.KYC_Information = result.KYC_Information;
          
        }else{
          formObject.KYC_Information = null;
        }
      
        if(result.applied_documents_status){
          
            formObject.applied_documents_status = result.applied_documents_status;
          
        }else{
          formObject.applied_documents_status = null;
        }
      
        if(result.KYC_status){
          
            formObject.KYC_status = result.KYC_status;
          
        }else{
          formObject.KYC_status = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "kyc_id":null,
        
      
        
          "kyc_of_userid":null,
        
      
        
          "KYC_Information":null,
        
      
        
          "applied_documents_status":null,
        
      
        
          "KYC_status":null 
        
      
      });
  }

}

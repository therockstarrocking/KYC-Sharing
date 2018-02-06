import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Kyc_Seekers_RequestsService } from './Kyc_Seekers_Requests.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Kyc_Seekers_Requests',
	templateUrl: './Kyc_Seekers_Requests.component.html',
	styleUrls: ['./Kyc_Seekers_Requests.component.css'],
  providers: [Kyc_Seekers_RequestsService]
})
export class Kyc_Seekers_RequestsComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          id = new FormControl("", Validators.required);
        
  
      
          KYC_Seeker_ID = new FormControl("", Validators.required);
        
  
      
          userid = new FormControl("", Validators.required);
        
  
      
          kyc_id = new FormControl("", Validators.required);
        
  
      
          status = new FormControl("", Validators.required);
        
  


  constructor(private serviceKyc_Seekers_Requests:Kyc_Seekers_RequestsService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          KYC_Seeker_ID:this.KYC_Seeker_ID,
        
    
        
          userid:this.userid,
        
    
        
          kyc_id:this.kyc_id,
        
    
        
          status:this.status
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceKyc_Seekers_Requests.getAll()
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
      $class: "org.acme.kyc.Kyc_Seekers_Requests",
      
        
          "id":this.id.value,
        
      
        
          "KYC_Seeker_ID":this.KYC_Seeker_ID.value,
        
      
        
          "userid":this.userid.value,
        
      
        
          "kyc_id":this.kyc_id.value,
        
      
        
          "status":this.status.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "KYC_Seeker_ID":null,
        
      
        
          "userid":null,
        
      
        
          "kyc_id":null,
        
      
        
          "status":null
        
      
    });

    return this.serviceKyc_Seekers_Requests.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "KYC_Seeker_ID":null,
        
      
        
          "userid":null,
        
      
        
          "kyc_id":null,
        
      
        
          "status":null 
        
      
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
      $class: "org.acme.kyc.Kyc_Seekers_Requests",
      
        
          
        
    
        
          
            "KYC_Seeker_ID":this.KYC_Seeker_ID.value,
          
        
    
        
          
            "userid":this.userid.value,
          
        
    
        
          
            "kyc_id":this.kyc_id.value,
          
        
    
        
          
            "status":this.status.value
          
        
    
    };

    return this.serviceKyc_Seekers_Requests.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceKyc_Seekers_Requests.deleteAsset(this.currentId)
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

    return this.serviceKyc_Seekers_Requests.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "KYC_Seeker_ID":null,
          
        
          
            "userid":null,
          
        
          
            "kyc_id":null,
          
        
          
            "status":null 
          
        
      };



      
        if(result.id){
          
            formObject.id = result.id;
          
        }else{
          formObject.id = null;
        }
      
        if(result.KYC_Seeker_ID){
          
            formObject.KYC_Seeker_ID = result.KYC_Seeker_ID;
          
        }else{
          formObject.KYC_Seeker_ID = null;
        }
      
        if(result.userid){
          
            formObject.userid = result.userid;
          
        }else{
          formObject.userid = null;
        }
      
        if(result.kyc_id){
          
            formObject.kyc_id = result.kyc_id;
          
        }else{
          formObject.kyc_id = null;
        }
      
        if(result.status){
          
            formObject.status = result.status;
          
        }else{
          formObject.status = null;
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
      
        
          "id":null,
        
      
        
          "KYC_Seeker_ID":null,
        
      
        
          "userid":null,
        
      
        
          "kyc_id":null,
        
      
        
          "status":null 
        
      
      });
  }

}

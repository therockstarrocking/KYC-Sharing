import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Aadhar_verificationsService } from './Aadhar_verifications.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Aadhar_verifications',
	templateUrl: './Aadhar_verifications.component.html',
	styleUrls: ['./Aadhar_verifications.component.css'],
  providers: [Aadhar_verificationsService]
})
export class Aadhar_verificationsComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          aadhar_number = new FormControl("", Validators.required);
        
  
      
          updatedBy = new FormControl("", Validators.required);
        
  
      
          id = new FormControl("", Validators.required);
        
  
      
          userId = new FormControl("", Validators.required);
        
  
      
          status = new FormControl("", Validators.required);
        
  


  constructor(private serviceAadhar_verifications:Aadhar_verificationsService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          aadhar_number:this.aadhar_number,
        
    
        
          updatedBy:this.updatedBy,
        
    
        
          id:this.id,
        
    
        
          userId:this.userId,
        
    
        
          status:this.status
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceAadhar_verifications.getAll()
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
      $class: "org.acme.kyc.Aadhar_verifications",
      
        
          "aadhar_number":this.aadhar_number.value,
        
      
        
          "updatedBy":this.updatedBy.value,
        
      
        
          "id":this.id.value,
        
      
        
          "userId":this.userId.value,
        
      
        
          "status":this.status.value
        
      
    };

    this.myForm.setValue({
      
        
          "aadhar_number":null,
        
      
        
          "updatedBy":null,
        
      
        
          "id":null,
        
      
        
          "userId":null,
        
      
        
          "status":null
        
      
    });

    return this.serviceAadhar_verifications.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "aadhar_number":null,
        
      
        
          "updatedBy":null,
        
      
        
          "id":null,
        
      
        
          "userId":null,
        
      
        
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
      $class: "org.acme.kyc.Aadhar_verifications",
      
        
          
            "aadhar_number":this.aadhar_number.value,
          
        
    
        
          
            "updatedBy":this.updatedBy.value,
          
        
    
        
          
        
    
        
          
            "userId":this.userId.value,
          
        
    
        
          
            "status":this.status.value
          
        
    
    };

    return this.serviceAadhar_verifications.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceAadhar_verifications.deleteAsset(this.currentId)
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

    return this.serviceAadhar_verifications.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "aadhar_number":null,
          
        
          
            "updatedBy":null,
          
        
          
            "id":null,
          
        
          
            "userId":null,
          
        
          
            "status":null 
          
        
      };



      
        if(result.aadhar_number){
          
            formObject.aadhar_number = result.aadhar_number;
          
        }else{
          formObject.aadhar_number = null;
        }
      
        if(result.updatedBy){
          
            formObject.updatedBy = result.updatedBy;
          
        }else{
          formObject.updatedBy = null;
        }
      
        if(result.id){
          
            formObject.id = result.id;
          
        }else{
          formObject.id = null;
        }
      
        if(result.userId){
          
            formObject.userId = result.userId;
          
        }else{
          formObject.userId = null;
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
      
        
          "aadhar_number":null,
        
      
        
          "updatedBy":null,
        
      
        
          "id":null,
        
      
        
          "userId":null,
        
      
        
          "status":null 
        
      
      });
  }

}

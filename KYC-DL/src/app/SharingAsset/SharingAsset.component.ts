import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharingAssetService } from './SharingAsset.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-SharingAsset',
	templateUrl: './SharingAsset.component.html',
	styleUrls: ['./SharingAsset.component.css'],
  providers: [SharingAssetService]
})
export class SharingAssetComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          id = new FormControl("", Validators.required);
        
  
      
          userId = new FormControl("", Validators.required);
        
  
      
          kycId = new FormControl("", Validators.required);
        
  
      
          sharingWithIDs = new FormControl("", Validators.required);
        
  


  constructor(private serviceSharingAsset:SharingAssetService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          userId:this.userId,
        
    
        
          kycId:this.kycId,
        
    
        
          sharingWithIDs:this.sharingWithIDs
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceSharingAsset.getAll()
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
      $class: "org.acme.kyc.SharingAsset",
      
        
          "id":this.id.value,
        
      
        
          "userId":this.userId.value,
        
      
        
          "kycId":this.kycId.value,
        
      
        
          "sharingWithIDs":this.sharingWithIDs.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "userId":null,
        
      
        
          "kycId":null,
        
      
        
          "sharingWithIDs":null
        
      
    });

    return this.serviceSharingAsset.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "userId":null,
        
      
        
          "kycId":null,
        
      
        
          "sharingWithIDs":null 
        
      
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
      $class: "org.acme.kyc.SharingAsset",
      
        
          
        
    
        
          
            "userId":this.userId.value,
          
        
    
        
          
            "kycId":this.kycId.value,
          
        
    
        
          
            "sharingWithIDs":this.sharingWithIDs.value
          
        
    
    };

    return this.serviceSharingAsset.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceSharingAsset.deleteAsset(this.currentId)
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

    return this.serviceSharingAsset.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "userId":null,
          
        
          
            "kycId":null,
          
        
          
            "sharingWithIDs":null 
          
        
      };



      
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
      
        if(result.kycId){
          
            formObject.kycId = result.kycId;
          
        }else{
          formObject.kycId = null;
        }
      
        if(result.sharingWithIDs){
          
            formObject.sharingWithIDs = result.sharingWithIDs;
          
        }else{
          formObject.sharingWithIDs = null;
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
        
      
        
          "userId":null,
        
      
        
          "kycId":null,
        
      
        
          "sharingWithIDs":null 
        
      
      });
  }

}

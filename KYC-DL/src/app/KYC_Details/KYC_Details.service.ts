import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { KYC_Details } from '../org.acme.kyc';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class KYC_DetailsService {

	
		private NAMESPACE: string = 'KYC_Details';
	



    constructor(private dataService: DataService<KYC_Details>) {
    };

    public getAll(): Observable<KYC_Details[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<KYC_Details> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<KYC_Details> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<KYC_Details> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<KYC_Details> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

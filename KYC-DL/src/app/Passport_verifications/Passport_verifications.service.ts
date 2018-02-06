import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Passport_verifications } from '../org.acme.kyc';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class Passport_verificationsService {

	
		private NAMESPACE: string = 'Passport_verifications';
	



    constructor(private dataService: DataService<Passport_verifications>) {
    };

    public getAll(): Observable<Passport_verifications[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Passport_verifications> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Passport_verifications> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Passport_verifications> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Passport_verifications> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

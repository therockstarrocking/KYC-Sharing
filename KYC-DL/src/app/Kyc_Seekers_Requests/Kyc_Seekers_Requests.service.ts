import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Kyc_Seekers_Requests } from '../org.acme.kyc';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class Kyc_Seekers_RequestsService {

	
		private NAMESPACE: string = 'Kyc_Seekers_Requests';
	



    constructor(private dataService: DataService<Kyc_Seekers_Requests>) {
    };

    public getAll(): Observable<Kyc_Seekers_Requests[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Kyc_Seekers_Requests> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Kyc_Seekers_Requests> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Kyc_Seekers_Requests> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Kyc_Seekers_Requests> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

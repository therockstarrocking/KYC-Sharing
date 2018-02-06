import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { SharingAsset } from '../org.acme.kyc';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class SharingAssetService {

	
		private NAMESPACE: string = 'SharingAsset';
	



    constructor(private dataService: DataService<SharingAsset>) {
    };

    public getAll(): Observable<SharingAsset[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<SharingAsset> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<SharingAsset> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<SharingAsset> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<SharingAsset> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

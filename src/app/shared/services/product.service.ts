import * as data from '../../../assets/product.json';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable()
export class ProductService {
    constructor(){
    }
    getitemsfromjson():Observable<any>{
         return of(data.items);
    }
    
    getitemsbyid(id: number):Observable<any> {
        const cat = data.items.find(x => x.productid === id);
        return of(cat);
    }

    deleteitembyid(id:number){
        const rec=data.items.findIndex(x => x.productid===id);
        data.items.splice(rec,1);
    }
    adddetailbysubmit(detail:any){
        data.items.push(detail);
    }
    geteditbyid(id:number){
        const edit = data.items.find(x => x.productid === id);
        return edit;
       }
    updateproduct(detail){
        const edit= this.geteditbyid(detail.productid);
         detail.productname= edit.productname;
         detail.productid=edit.productid;
         detail.description=edit.description;
         detail.quantity=edit.quantity;
         detail.createddate=edit.createddate;
       }

}

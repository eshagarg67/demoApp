import * as data from '../../../assets/product.json';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    constructor(){
    }
    getitemsfromjson(){
         return data.items;
    }
    
    getitemsbyid(id: number) {
        const cat = data.items.find(x => x.productid === id);
        return cat;
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

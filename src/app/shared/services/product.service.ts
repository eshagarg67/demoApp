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

}

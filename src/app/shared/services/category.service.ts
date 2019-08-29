import * as categories from '../../../assets/category.json';
import { Injectable } from '@angular/core';
import {  Observable, of} from 'rxjs';
//import  'rxjs/add/observable/of';



@Injectable()
export class CategoryService {
  getcategories: any;
detail:any;


    constructor() {

    }

    getcategoriesfromjson():Observable<any> {
        return of (categories.categories);
    }

    getCategoryById(id: number):Observable<any>{
        const cat = categories.categories.find(x => x.categoryid === id);
        return of (cat);
    }

   deleteCategoryById(id:number){
       const rec=categories.categories.findIndex(x => x.categoryid===id);
       categories.categories.splice(rec,1);
   }
   adddetailbysubmit(detail:any){
       categories.categories.push(detail);
   }

   getEditById(id:number){
    const edit = categories.categories.find(x => x.categoryid === id);
    return edit;
   }

   updateCategory(detail){
    const edit= this.getEditById(detail.categoryid);
     detail.categoryname= edit.categoryname;
     detail.categoryid=edit.categoryid;
     detail.description=edit.description;
     detail.quantity=edit.quantity;
     detail.createddate=edit.createddate;
   }
   
}
    



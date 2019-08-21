import * as categories from '../../../assets/category.json';
import { Injectable } from '@angular/core';
import { NgIf } from '@angular/common';

@Injectable()
export class CategoryService {

    constructor() {

    }

    getcategoriesfromjson() {
        return categories.categories;
    }

    getCategoryById(id: number) {
        const cat = categories.categories.find(x => x.categoryid === id);
        return cat;
    }

   deleteCategoryById(id:number){
       const rec=categories.categories.findIndex(x => x.categoryid===id);
       categories.categories.splice(rec,1);
   }
}
    



import * as categories from '../../../assets/category.json';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

    constructor() {

    }
    getcategoriesfromjson() {
        return categories.categories;
    }
}


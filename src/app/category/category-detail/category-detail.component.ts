import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  categoryId = 0;
  category: { "categoryname": string; "categoryid": number; "description": string; "quantity": string; "createddate": string; "isActive": boolean; };
  record: void;
  
  constructor(private route: ActivatedRoute,private categoryservice: CategoryService) {
    this.route.params.subscribe(param => {
      this.categoryId= parseInt(param['id']);
      console.log(this.categoryId);
      this.category = this.categoryservice.getCategoryById(this.categoryId);
    
    });
  
  }
  ngOnInit() {
    
  }


}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  categories: any[] = [];
  constructor(private categoryservice: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryservice.getcategoriesfromjson();
  }
  navigate(id){
    
  }


}

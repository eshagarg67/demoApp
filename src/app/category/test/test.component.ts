import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  categories: any[] = [];
  isDataAvailable = false;
  visible = false;
  constructor(private categoryservice: CategoryService, private router: Router) {

  }



  ngOnInit() {
    this.getResults();
    this.visible = true;
    this.categoryservice.getcategoriesfromjson().pipe(delay(5000)).subscribe(data => {
      this.categories = data;
      this.isDataAvailable = true;
      this.visible = false;
    },
      error => {


      });
  }

call(){}
  getResults() {
    this.categoryservice.sendRequest().subscribe(data => {
      console.log(data);
    })
  }

  navigate(id) {
    this.router.navigate(['test/detail', id])
  }

  navi(id) {
    this.router.navigate(['editCategory', id])
  }

  deleteRow(id) {

    if (id) {

      if (confirm("Are you sure")) {
        this.categoryservice.deleteCategoryById(id)
      }
      else ("data not found")

    }
  }

}

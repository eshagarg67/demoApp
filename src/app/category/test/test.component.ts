import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  myname="isha";
  onSubmit(value:any){
    console.log(value);
  }
  categories: any[] = [];
  isDataAvailable=false;
  constructor(private categoryservice: CategoryService, private router: Router) {

  }



  ngOnInit() {
   this.categoryservice.getcategoriesfromjson().subscribe(data=>{
     this.categories=data;
     this.isDataAvailable=true;
   },
   error=>{

   
   });
  }
  navigate(id) {
    this.router.navigate(['test/detail', id])
  }

  navi(id) {
    this.router.navigate(['editCategory', id])
  }
  deleteRow(id) {
    

    if (confirm("Are you sure")) {
      this.categoryservice.deleteCategoryById(id)
    }
  }
}
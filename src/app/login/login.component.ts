import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //loginmodel: any = {
    //uname: '', upassword: '', uEmail: '', udropdown: '', ugender: '',
 // };
  categories: any[] = [];
  category: any;
  submitted: any = false;
  userForm: NgForm;
  checked: any;
  count = 0;
  constructor(private categoryservice: CategoryService) { }

  ngOnInit() {
    this.categoryservice.getcategoriesfromjson().subscribe(data => {
      this.categories = data;
    },
      error => {


      });

  }
  onSubmit(data) {
    console.log(data);
    this.submitted = true;
  }

  validateCheckbox(event) {
    debugger;
    console.log(event);

    if (event.target.checked == true) {
      this.count = this.count + 1;
    }
    else {
    --this.count;
    }
    

    //   var checkboxes = document.getElementsByName('choose');
    //   checkboxes.forEach((item: any) => {
    //     if (item.checked) {
    //       this.count++;
    //     }    
    //   });
    //   checkboxes
    console.log(this.count);
  }
}


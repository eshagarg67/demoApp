import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class AddFormComponent implements OnInit {
  categoryId = 0;
  category:any= {
    categoryname: '',
    categoryid: '', description: '', quantity: '', createddate: '',
    isActive: false
  };

  constructor(private route: ActivatedRoute,private router:Router, private categoryservice: CategoryService) {
    this.route.params.subscribe(param => {
      this.categoryId = parseInt(param['id']);
      console.log(this.categoryId);
      if (this.categoryId) {
        this.category=  this.categoryservice.getEditById(this.categoryId);
        console.log(this.category);

      }
    },

    )
  }


  ngOnInit() {
    if (this.category) {

    }
  }

  onSubmit(detail) {
    debugger;
    console.log(detail);
    if (!this.categoryId) {
      this.categoryservice.adddetailbysubmit(detail);
      this.router.navigate(['/', 'test']);
    }
    else {
      // update
       
    }
  }


}

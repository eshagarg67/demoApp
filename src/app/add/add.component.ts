import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
//import {ActiveRoute} from '@angular/core'
//import {Activeroute} from '@angilaye/core'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']

})
export class AddComponent implements OnInit {
productId=0;
product:any= {
  productname: '',
  productid: '', description: '', quantity: '', createddate: '',
  isActive: false
};

  constructor(private productservice:ProductService,private route:ActivatedRoute) { 
    this.route.params.subscribe(param => {
      this.productId = parseInt(param['id']);
      console.log(this.productId);
      if (this.productId) {
       this.product = this.productservice.geteditbyid(this.productId);
        console.log(this.product);
      }
    },

    )
  }

  ngOnInit() {
  }
  onSubmit(detail) {
    debugger;
    console.log(detail);
    if (!this.productId) {
      this.productservice.adddetailbysubmit(detail);
    }
    else {
      this.productservice.updateproduct(detail);
       
    }
  }




}

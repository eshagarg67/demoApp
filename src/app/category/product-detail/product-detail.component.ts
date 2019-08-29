import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId = 0;
  product: { "productname": string; "productid": number; "description": string; "quantity": string; "createddate": string; "isActive": boolean; };
  record: void;
  
  constructor(private route: ActivatedRoute,private productservice: ProductService) {
    this.route.params.subscribe(param => {
      this.productId= parseInt(param['id']);
      console.log(this.productId);
      this.product = this.productservice.getitemsbyid(this.productId);
    
    });
  }
  

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  items:any[]=[];
  constructor(private productservice: ProductService,private router:Router) { }

  ngOnInit() {
    this.items = this.productservice.getitemsfromjson();
    
  
}
View(id){
  this.router.navigate(['detail',id])
}
edit(id) {
  this.router.navigate(['editproduct', id])
}
deleteRow(id) {
    

  if (confirm("Sure")) {
    this.productservice.deleteitembyid(id)
  }
}
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './category/test/test.component';
import {CategoryService} from './shared/services/category.service';
import {ProductService} from './shared/services/product.service';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { AddFormComponent } from './form/form.component';
import { ProductListComponent } from './category/product-list/product-list.component';
import { ProductDetailComponent } from './category/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CategoryDetailComponent,
    AddFormComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CategoryService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

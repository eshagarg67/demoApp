import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './category/test/test.component';
import { CategoryService } from './shared/services/category.service';
import { ProductService } from './shared/services/product.service';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { AddFormComponent } from './form/form.component';
import { ProductListComponent } from './category/product-list/product-list.component';
import { ProductDetailComponent } from './category/product-detail/product-detail.component';
import { AddComponent } from './add/add.component';
import { SpinnerService } from './shared/services/spinner.service';
import { LoginComponent } from './login/login.component'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './api/api.component';
import { ApiService } from './shared/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CategoryDetailComponent,
    AddFormComponent,
    ProductListComponent,
    ProductDetailComponent,
    AddComponent,
    LoginComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [CategoryService, ProductService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

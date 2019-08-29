import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { TestComponent } from './category/test/test.component';
import { AddFormComponent } from './form/form.component';
import { ProductListComponent } from './category/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    children: [
      {
        path: 'detail/:id',
        component: CategoryDetailComponent,
      }]
  },
  { path: 'addCategory', component: AddFormComponent },
  {
        path: 'editCategory/:id',
        component: AddFormComponent,
   },
   {path:'productlist',
   component: ProductListComponent,
   children:[
     {
       path:'detail/:id',
       component:ProductListComponent,
     }
   ]
  
  },

  // {
  //   path: 'category/detail/:id',
  //   component: CategoryDetailComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

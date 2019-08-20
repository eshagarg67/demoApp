import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { TestComponent} from './category/test/test.component';

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

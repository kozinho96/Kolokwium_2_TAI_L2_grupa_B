import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopDetailsKKComponent} from './components/shop-details-kk/shop-details-kk.component';
import {ShopKKComponent} from './components/shop-kk/shop-kk.component';

const routes: Routes = [
  {
    path: '',
    component: ShopKKComponent
  },
  {
    path: 'detail/:id',
    component: ShopDetailsKKComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

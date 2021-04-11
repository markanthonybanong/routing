import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('../product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'order',
    loadChildren: () => import('../order/order.module').then(m => m.OrderModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

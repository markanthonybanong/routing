import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { IonicModule } from '@ionic/angular';
 


@NgModule({
  declarations: [
    OrderComponent,
    OrderListComponent,
    AddOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    IonicModule,
    
  ]
})
export class OrderModule { }

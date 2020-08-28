import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderConfimationPage } from './order-confimation';

@NgModule({
  declarations: [
    OrderConfimationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfimationPage),
  ],
})
export class OrderConfimationPageModule {}

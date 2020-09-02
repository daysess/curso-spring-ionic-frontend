import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderConfimationPage } from './order-confimation';
import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    OrderConfimationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfimationPage),
  ],
  providers: [
    PedidoService
  ]
})
export class OrderConfimationPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosProntosPage } from './pedidos-prontos';

@NgModule({
  declarations: [
    PedidosProntosPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosProntosPage),
  ],
})
export class PedidosProntosPageModule {}

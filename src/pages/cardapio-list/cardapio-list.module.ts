import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardapioListPage } from './cardapio-list';

@NgModule({
  declarations: [
    CardapioListPage,
  ],
  imports: [
    IonicPageModule.forChild(CardapioListPage),
  ],
})
export class CardapioListPageModule {}

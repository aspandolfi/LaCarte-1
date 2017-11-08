import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CozinhaDetalhePage } from './cozinha-detalhe';

@NgModule({
  declarations: [
    CozinhaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(CozinhaDetalhePage),
  ],
})
export class CozinhaDetalhePageModule {}

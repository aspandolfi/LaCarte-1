import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastPage } from './cadast';

@NgModule({
  declarations: [
    CadastPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastPage),
  ],
})
export class CadastPageModule {}

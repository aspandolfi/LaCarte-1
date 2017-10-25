import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComidasPage } from './comidas';

@NgModule({
  declarations: [
    ComidasPage,
  ],
  imports: [
    IonicPageModule.forChild(ComidasPage),
  ],
})
export class ComidasPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewDicePage } from './new-dice';

@NgModule({
  declarations: [
    NewDicePage,
  ],
  imports: [
    IonicPageModule.forChild(NewDicePage),
  ],
  exports: [
    NewDicePage
  ]
})
export class NewDicePageModule {}

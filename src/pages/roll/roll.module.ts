import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RollPage } from './roll';

@NgModule({
  declarations: [
    RollPage,
  ],
  imports: [
    IonicPageModule.forChild(RollPage),
  ],
  exports: [
    RollPage
  ]
})
export class RollPageModule {}

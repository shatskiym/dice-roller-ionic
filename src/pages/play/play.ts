import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the PlayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage {
  dices = [
    'd4', 'd6', 'd8', 'd10', 'd12', 'd20'
  ];
  constructor(public navCtrl: NavController) {

  }

}

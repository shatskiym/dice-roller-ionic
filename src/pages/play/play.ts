import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RollPage } from '../roll/roll'

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
    {name: 'd4', num: 0, edges: 4},
    {name: 'd6', num: 0, edges: 6},
    {name: 'd8', num: 0, edges: 8},
    {name: 'd10', num: 0, edges: 10},
    {name: 'd12', num: 0, edges:  12},
    {name: 'd20', num: 0, edges: 20}
  ];
  constructor(public navCtrl: NavController) {

  }

  increaseNumber(dice) {
    dice.num += 1;
  }

  decreaseNumber(dice) {
    if (dice.num == 0) {
      return true;
    }
    dice.num -= 1;
  }

  startPlay(dices) {
    this.navCtrl.push(RollPage, {
      dices: dices
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RollPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-roll',
  templateUrl: 'roll.html',
})
export class RollPage {
  dices : any[]
  dicesForRoll :any[]
  totalResult: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dices = navParams.get('dices');
    this.dicesForRoll = [];
    for (let dice of this.dices) {
      for (let _i = 0; _i < dice.num; _i+=1) {
        this.dicesForRoll.push({
          name: dice.name,
          edges: dice.edges,
          value: 1
        });
      }
    }
    this.rollDices();
  }

  rollDices() {
    this.totalResult = 0;
    for (let dice of this.dicesForRoll) {
      dice.value = Math.floor(Math.random() * dice.edges) + 1;
      this.totalResult += dice.value;
    }
  }

}

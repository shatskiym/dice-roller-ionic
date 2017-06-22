import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RollPage } from '../roll/roll'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
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
  HTTP: any;
  dices: any[];
  constructor(public navCtrl: NavController, public http: Http) {
    this.HTTP = http;
    this.dices = [];
  }

  getDices() {
    this.dices = [];
    this.searchDices().subscribe(
      data => {
        for (var dice of data) {
          this.dices.push({
            name: dice.name,
            edges: dice.edges,
            num: 0
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  searchDices() {
    var url = 'https://dice-roller-server.herokuapp.com/dices';
    var response = this.HTTP.get(url).map(res => res.json());
    return response;
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

  ionViewDidEnter() {
    this.getDices();
  }

}

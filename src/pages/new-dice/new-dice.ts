import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the NewDicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-dice',
  templateUrl: 'new-dice.html',
})
export class NewDicePage {
  name: any;
  edges: any;
  HTTP: any;
  serverOK: any;
  diceCreated: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.HTTP = http;
  }

  ionViewDidLoad() {
    this.name = '';
    this.edges = 4;
    this.serverOK = true;
    this.diceCreated = false;
  }

  ionViewDidEnter() {
    this.name = '';
    this.edges = 4;
    this.serverOK = true;
    this.diceCreated = false;
  }

  createNewDice() {
    this.postDice().subscribe(
      data => {
        this.name = '';
        this.edges = 0;
        this.diceCreated = true;
      },
      err => {
        this.serverOK = false;
      }
    );
  }

  postDice() {
    var url = 'https://dice-roller-server.herokuapp.com/dices';
    var params = {
      name: this.name,
      edges: this.edges
    };
    var response = this.HTTP.post(url, params);
    return response;
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public searchKey: string;

  constructor(public navCtrl: NavController) {

  }

  /**
   * Search keyword
   */
  search():void {
    this.navCtrl.push(ResultsPage);
  }

}

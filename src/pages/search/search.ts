import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {SystemProvider} from "../../providers/system/system";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  alertmessage = '';
  data : any;
  countries: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams  , public Service: SystemProvider,public alertCtrl: AlertController) {

  }

  ionViewDidEnter() {
    this.displayEmployeeDetails();

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: this.alertmessage,
      buttons: ['OK']
    });
    alert.present();
  }


  displayEmployeeDetails() {
    let loader = this.loadingCtrl.create({
      content: 'loading...',
      duration: 3000

    });

    loader.present().then(() => {
      this.Service.getEmployeeDeatils()
        .subscribe(
          response => {

            this.data = response

          },
          error => {
            if (error.status === 0) {
              this.alertmessage = "not internet connection or server is down";
              this.showAlert();
            }
          });
      loader.dismiss();
    });


  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}

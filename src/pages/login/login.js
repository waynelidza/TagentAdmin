var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SystemProvider } from "../../providers/system/system";
import { Storage } from '@ionic/storage';
import { MainPage } from "../main/main";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(loadingCtrl, navCtrl, navParams, Service, alertCtrl, storage) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Service = Service;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.login = { password: '', username: '' };
        this.errorcount = 0;
        this.admin = 0;
        this.varcounterrorLogin = 0;
        this.alertmessage = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.Login = function () {
        var _this = this;
        this.varcounterrorLogin = 0;
        if (this.login.username === '') {
            this.varcounterrorLogin++;
        }
        if (this.login.password === '') {
            this.varcounterrorLogin++;
        }
        if (this.varcounterrorLogin > 0) {
            this.alertmessage = "  Username and password cannot be blank";
            this.showAlert();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'please wait...',
            });
            loader_1.present().then(function () {
                _this.Service.login(_this.login.username, _this.login.password)
                    .subscribe(function (response) {
                    if (response.token) {
                        //storing storage in sqlite /database
                        _this.storage.set('Token', response.token);
                        _this.navCtrl.push(MainPage);
                    }
                    else {
                        _this.alertmessage = " wrong Username or password";
                        _this.showAlert();
                    }
                }, function (error) {
                    if (error.status === 400) {
                        _this.alertmessage = " wrong username or password";
                        _this.showAlert();
                    }
                    if (error.status === 0) {
                        _this.alertmessage = "not internet connection or server is down";
                        _this.showAlert();
                    }
                });
                loader_1.dismiss();
            });
        }
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            subTitle: this.alertmessage,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [LoadingController, NavController, NavParams, SystemProvider, AlertController, Storage])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map
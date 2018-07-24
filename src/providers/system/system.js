var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the SystemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SystemProvider = (function () {
    function SystemProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.userToken = '';
    }
    SystemProvider.prototype.login = function (username, password) {
        return this.http.post('http://staging.tangent.tngnt.co/api-token-auth/', { username: username, password: password })
            .map(function (user) {
            return user;
        });
    };
    SystemProvider.prototype.handleError = function (error) {
        var responseStatus = error.status;
        if (responseStatus === 503) {
        }
        return Promise.reject(error);
    };
    SystemProvider.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('Token').then(function (token) {
            _this.userToken = token;
            console.log('Your age is', token);
        });
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token 2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678',
            })
        };
        return this.http.get('http://staging.tangent.tngnt.co/api/user/me/', httpOptions)
            .map(function (user) {
            return user;
        });
    };
    SystemProvider.prototype.getUserProfile = function () {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token 2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678',
            })
        };
        return this.http.get('http://staging.tangent.tngnt.co/api/employee/me/', httpOptions)
            .map(function (user) {
            return user;
        });
    };
    SystemProvider.prototype.getEmployeeDeatils = function () {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token 2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678',
            })
        };
        return this.http.get('http://staging.tangent.tngnt.co/api/employee/', httpOptions)
            .map(function (user) {
            return user;
        });
    };
    SystemProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, Storage])
    ], SystemProvider);
    return SystemProvider;
}());
export { SystemProvider };
//# sourceMappingURL=system.js.map
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Storage } from '@ionic/storage';
/*
  Generated class for the SystemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SystemProvider {


  userToken = '';
  constructor(public http: HttpClient,public storage: Storage) {

  }
  login(username: string, password: string) {
    return this.http.post<any>('http://staging.tangent.tngnt.co/api-token-auth/', { username: username, password: password })
      .map(user => {



        return user;
      });
  }

  private handleError(error: any): Promise<any> {

    let responseStatus = error.status;
    if (responseStatus === 503) {

    }

    return Promise.reject(error);
  }



  getUserDetails() {


    this.storage.get('Token').then((token) => {

      this.userToken = token;

    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token'+this.userToken,

      })
    };
    return this.http.get<any>('http://staging.tangent.tngnt.co/api/user/me/',httpOptions)
      .map(user => {



        return user;
      });
  }

  getUserProfile(){
    this.storage.get('Token').then((token) => {

      this.userToken = token;

    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token'+this.userToken,

      })
    };
    return this.http.get<any>('http://staging.tangent.tngnt.co/api/employee/me/',httpOptions)
      .map(user => {



        return user;
      });
  }
  getEmployeeDeatils(){
    this.storage.get('Token').then((token) => {

      this.userToken = token;

    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token'+this.userToken,

      })
    };
    return this.http.get<any>('http://staging.tangent.tngnt.co/api/employee/',httpOptions)
      .map(user => {



        return user;
      });
  }
}

import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SystemProvider } from '../providers/system/system';
import {LoginPageModule} from "../pages/login/login.module";
import {IonicStorageModule} from "@ionic/storage";
import {HttpClientModule} from "@angular/common/http";
import {MainPageModule} from "../pages/main/main.module";
import {ProfilePageModule} from "../pages/profile/profile.module";
import {SearchPageModule} from "../pages/search/search.module";
import {DashboardPageModule} from "../pages/dashboard/dashboard.module";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    HttpClientModule,
    MainPageModule,
    ProfilePageModule,
    SearchPageModule,
    DashboardPageModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SystemProvider

  ]
})
export class AppModule { }

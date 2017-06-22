import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlayPage } from '../pages/play/play';
import { RollPage } from '../pages/roll/roll';
import { CameraPage } from '../pages/camera/camera';
import { Camera } from '@ionic-native/camera';;

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PlayPage,
    CameraPage,
    RollPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PlayPage,
    CameraPage,
    RollPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

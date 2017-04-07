import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders} from 'angularfire2';

import { MyApp } from './app.component';
import { newMessagePage } from '../pages/newMessage/newMessage';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';

import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';




//this is the code that firebase gave me to initialize it the my project
//can be added in through the index.html page but I found this way to do it too. 
export const firebaseConfig = {
  apiKey: "AIzaSyCDWsqHJpQu_LJgG7YjIvW2H-nYE6JaRpA",
  authDomain: "fypionic.firebaseapp.com",
  databaseURL: "https://fypionic.firebaseio.com",
  storageBucket: "fypionic.appspot.com",
  messagingSenderId: "350190828047"  
};


@NgModule({
  declarations: [
    MyApp,
    newMessagePage,
    ProfilePage,
    HomePage,
    DetailsPage,
    TabsPage,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    newMessagePage,
    ProfilePage,
    HomePage,
    DetailsPage, 
    TabsPage,
    LoginPageComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
    ]
    //anything in providers gets injected into any of the components
})
export class AppModule {}

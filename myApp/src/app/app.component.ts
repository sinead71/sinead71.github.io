import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import 'rxjs/Rx';
import { initializeApp, database } from 'firebase';

import { LoginPageComponent } from './login-page/login-page.component';
import { HttpService } from './providers/http.service';

@Component({
  templateUrl: 'app.html',
  providers: [HttpService]
})
export class MyApp  implements OnInit{
  // the very firest page that will appear when opening the project
  rootPage = LoginPageComponent;

  constructor(private httpService: HttpService, platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

    });
  }
  ngOnInit(){
    this.httpService.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }
  
}
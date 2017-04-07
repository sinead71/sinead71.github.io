import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { HttpService } from '../../app/providers/http.service';

@Component({
  selector: 'page-newMessage',
  templateUrl: 'newMessage.html',
  providers: [HttpService]
})
export class newMessagePage {
  clearHeader: string = "";
  clearMessage: string = "";
  user = {};

  constructor(private httpService: HttpService, public af: AngularFire) {
    //making sure the user is logged in
    this.af.auth.subscribe(user =>{
      if(user){
        this.user = user.auth.providerData[0];
      }else{
        this.user = {};
      }
    })
  }

  //logs user out
  Logout(){
    this.af.auth.logout();
  }

  
  MessageSubmit(messageHeader: string, newMessage: string){
    this.httpService.sendData({messageHeader: messageHeader, newMessage: newMessage})
      .subscribe(
        data => console.log
      );
    this.clearHeader = null;
    this.clearMessage = null;
  }
  
}

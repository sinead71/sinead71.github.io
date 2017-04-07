import { Component} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import "rxjs/add/operator/map";

import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { HttpService } from '../../app/providers/http.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[] = [];
  user = {};
  afItems: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, 
              public af: AngularFire, 
              private httpService: HttpService) {
    this.af.auth.subscribe(user =>{
      console.log('---->', user)
      if(user){
        this.user = user.auth.providerData[0];
        //NewMessage is the name of the firebase table
        //this also reverses the array so that it will show the newer additions to the array first
        this.afItems = af.database.list('/NewMessage', {query: {orderByChild: 'date'}})
        .map((array) => array.reverse()) as FirebaseListObservable<any[]>; 
      }
      else{
        this.user = {};
        this.afItems = null;
      }

      
      //creating array to loop through data in newMessages table so it can be adding it to the home page
      this.httpService.getData()
        .subscribe(
            NewMessage => {
              const myArray = [];
              for (let key in NewMessage){
                myArray.push(key);
                console.log(myArray);
              }
              this.items = myArray;
            }
        );
    });

  }
  
  //logs the user out
  Logout(){
    this.af.auth.logout();
  }

  //gets the data from each field and passes it to the detailsPage where it wil be displayed on screen
  addComment(key:any, header:string, message:string){
    this.navCtrl.push (DetailsPage, {
      key: key,
      header: header,
      message: message
    });
    }

    }
  
  




  
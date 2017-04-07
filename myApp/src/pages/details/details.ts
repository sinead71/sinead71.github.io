import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/providers/http.service';
//import { HomePage } from './home/home';

@Component({
  templateUrl: 'details.html',
  providers: [HttpService]
})
export class DetailsPage implements OnInit{
  items: any[] = [];
  comments: any[] = [];
  id: any;
  item: any;
  user = {};
  //the variable that gets the object sfrom firebase.
  afItems: FirebaseListObservable<any[]>;
  afComments: FirebaseListObservable<any[]>;
  showHideInput: boolean = false;
  key: any;
  header: string;
  message: string;
  clearComment: string = "";

  
  constructor(public navCtrl: NavController,
              public af: AngularFire,
              public params:NavParams, 
              private httpService: HttpService) {
      this.af.auth.subscribe(user =>{
        if(user){
          //makes sure that the user is logged in.
          this.user = user.auth.providerData[0];
          //geting the messages
          this.afItems = af.database.list('/NewMessage' )
            .map((array) => array.reverse()) as FirebaseListObservable<any[]>; 
          //getting the comments
          this.afComments = af.database.list('/NewComment')
            .map((array) => array.reverse()) as FirebaseListObservable<any[]>;
        }
        else{
          // if no user is logged in then the variablewill set to null so that they can't be seen
        this.user = {};
        this.afItems = null;
        this.afComments = null;
      }
      });
      //getting the key of the firebase data from home page
      //this array gets looped though on the details.html file
      this.httpService.getData()
        .subscribe(
            NewMessage => {
              const myArray = [];
              for (let key in NewMessage){
                myArray.push(key);
              }
              this.items = myArray;
            }
      );

      //getting the key for the comments array
      //this array gets looped though on the details.html file
      this.httpService.getComment()
        .subscribe(
          NewComment => {
            const myCommentArray = [];
            for (let key in NewComment){
              myCommentArray.push(key);
            }
            this.comments = myCommentArray;
          }
        )
          
  }

  //Logs the user out
  Logout(){
    this.af.auth.logout();
  }

  //key, header and messgae are variables created at the top of that page that will store the
  //values of the message that was clicked on to view. This is then shown on the details.html
  //file eg. {{header}}
  ngOnInit(){
    this.key = this.params.get('key');
    this.header = this.params.get('header');
    this.message = this.params.get('message');

    this.httpService.getData()
      .subscribe(
        item => {this.item = item;}
      );
  }
  
  //this hides or shows the comment input field when the pluse button is hit.
  addCommentBtn(){
    if(this.showHideInput == false){
      this.showHideInput = true;
      console.log(this.showHideInput);
    }else if (this.showHideInput == true){
      this.showHideInput = false;
    }
    console.log("message after show hide statement");    
  }

  //takes the comment value and the message unique key(that was clicked on) in the hidden input field.
  commentSubmit(newComment:string, messageKey: any){
    this.httpService.sendComment({newComment: newComment, messageKey: messageKey})
      .subscribe(
        data => console.log 
      );
    //this clears the input field when the comment is sent and also sets it to hide again. 
    this.clearComment = null;
    this.showHideInput = false;

  }

}  


import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';


@Injectable()
export class AuthService{
  user = {};
  items: FirebaseListObservable<any[]>;


  constructor(public af: AngularFire){
    this.af.auth.subscribe(user => {
      console.log('---->', user)
      if (user) {
        //checking user is logged in
        this.user = user.auth.providerData[0];
        this.items = af.database.list('/items');
      }
      else{
        this.user = {};
      }
    });
  }

  //using firebases option of using google to sign in to the app
  loginWithGoogle(){
      return this.af.auth.login({
          //want to sign in with google
          provider: AuthProviders.Google,
          //and how it will be done. popup = popup window
          method: AuthMethods.Popup
      });
    }   

    //logging user out
    logout(){
        return this.af.auth.logout();
    }

    //checking to see if the user is logged in by checking firebases user id. this is then used on the login-page component
  isUserLoggedIn(){
    return (Object.keys(this.user).length === 0);
  }

} 
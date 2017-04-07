import { Injectable } from  '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'

@Injectable()
export class HttpService{
    fbId: FirebaseObjectObservable<any>;

    constructor(public af: AngularFire, private http: Http){}  

    //grabs all data from the NewMessage table. This function is used in files that need the data.
    getData(){
        return this.http.get('https://fypionic.firebaseio.com/NewMessage.json')
            .map((response: Response) => response.json()); 
    } 

    //grabs all data from the NewComment table on firebase
    getComment(){
        return this.http.get('https://fypionic.firebaseio.com/NewComment.json')
            .map((response: Response) => response.json()); 
    } 

    //sending the data from the new message page that was submitted and adds it to the NewMessage table
    sendData(message: any){
        const body = JSON.stringify(message);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://fypionic.firebaseio.com/NewMessage.json', body, {
            headers: headers
        })
            .map((data: Response) => data.json());
    }

    //sending the data from the add comment field on the details page that was submitted and adds it to the NewComment table
    sendComment(comment: any){
        const body = JSON.stringify(comment);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://fypionic.firebaseio.com/NewComment.json ', body, {
            headers: headers
        })
            .map((data: Response) => data.json());
    }

    //getting the id of the objects from the NewMessage table 
    getDetailsId(id){
        this.fbId = this.af.database.object('/message'+id) as FirebaseObjectObservable<any>;
        return this.fbId;
    }
    
}
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';
//import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject<any>(null);
  token:any;
  constructor(private afs : AngularFirestore,private afa: AngularFireAuth,private afm: AngularFireMessaging) {
    }
  
  requestPermission(){
      this.afm.requestToken.subscribe((token) => {
      console.log(token); 
      this.updateToken(token);
      return true;
    },(err) =>{
      console.log("unable to get user permission",err);
    })
  }

  userId = "001";
  updateToken(token:any){
    this.afa.authState.subscribe(()=>{
      let data = {"user":this.userId,"token":token};
      this.afs.collection('tokens/').add(data);
    })
  }

  receiveMessaging(){
    this.afm.messages.subscribe((payload)=>{
      console.log("new message received",payload);
      this.currentMessage.next(payload);
    })
  }

}

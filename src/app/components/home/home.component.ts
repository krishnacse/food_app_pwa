import { Component } from '@angular/core';
import { MessagingService } from './../../shared/messaging.service';
import { DataService } from 'src/app/shared/data.service';
import { Item } from 'src/app/model/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  message: any;
  constructor(private ms: MessagingService,private data: DataService){}
  pizzas = this.data.veg_pizzas;
  item: Item = {
    id: "",
    vegetarian: "",
    name: "",
    price: "",
    description: "",
  };
  id: string = "";
  vegetarian: string = "";
  name: string = "";
  price: string = "";
  description: string = "";

  
  subscribeToNotifications(){
    const text = "You want to subscribe for our notifications?"
    if(confirm(text)==true){
      this.ms.requestPermission();
      this.ms.receiveMessaging();
      this.message = this.ms.currentMessage;
    }
  }
  addToCart(item: any){
    console.log(item);
  }

}

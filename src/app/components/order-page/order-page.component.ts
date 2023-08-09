import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/auth.service";
import { DataService } from "src/app/shared/data.service";
import { MessagingService } from "src/app/shared/messaging.service";
import { Item } from "src/app/model/items";

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.css"],
})
export class OrderPageComponent implements OnInit {
  itemList: Item[] = [];
  itemObj: Item = { id: "",vegetarian: "",name: "",price: "",description: "", };
  id: string = "";
  vegetarian: string = "";
  name: string = "";
  price: string = "";
  description: string = "";

  message: any;
  constructor(private ms: MessagingService,private auth: AuthService,private data: DataService) {}
  ngOnInit(): void {
    this.getAllItems();
  }

  veganTypes = this.data.vegan_types;
  vegPizzas = this.data.veg_pizzas;
  nonVegPizzas = this.data.non_veg_pizzas;

 //get all items
  getAllItems() {
    this.data.getAllItems().subscribe(
      (res) => {
        this.itemList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });

        console.log(this.itemList);
      },
      (err) => {
        alert("error while fetching");
      }
    );
  }
  //reset form
  resetForm() {
    this.id = "";
    this.vegetarian = "";
    this.name = "";
    this.price = "";
    this.description = "";
  }
  //add item
  addItem(from: any) {
    if (
      this.vegetarian == "" ||
      this.name == "" ||
      this.price == "" ||
      this.description == ""
    ) {
      alert("Fill all input fields");
    }else{

    
    this.itemObj.id = from == "add" ? "" : this.id;
    this.itemObj.vegetarian = this.vegetarian;
    this.itemObj.name = this.name;
    this.itemObj.price = this.price;
    this.itemObj.description = this.description;

    if(from == "add"){
      this.data.addItem(this.itemObj);
    }else{
      this.data.updateItem(this.itemObj);
    }
    this.resetForm();
  }
  }
  //update item
  updateItem(item: Item) {
    this.id = item.id;
    this.vegetarian = item.vegetarian;
    this.name = item.name;
    this.price = item.price;
    this.description = item.description;
  }
  //delete item
  deleteItem(item: Item) {
    if (
      window.confirm(
        "Are you sure want to item" + item.vegetarian + " " + item.name + " ?"
      )
    )
      this.data.deleteItem(item);
  }
}

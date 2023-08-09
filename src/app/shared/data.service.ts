import { Injectable } from "@angular/core";
import {AngularFirestore } from "@angular/fire/compat/firestore";
import { Item } from "../model/items";
import { NgModel } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  vegan_types = ["vegetarian","non_vegetarian"];
  veg_pizzas = [
    {
        "name": "Margherita Pizza",
        "description": "Classic tomato sauce, mozzarella cheese, fresh basil leaves, and a drizzle of olive oil.",
        "price": 10.99
    },
    {
        "name": "Veggie Supreme Pizza",
        "description": "Tomato sauce, mozzarella cheese, bell peppers, onions, black olives, mushrooms, and tomatoes.",
        "price": 12.99
    },
    {
        "name": "Spinach and Feta Pizza",
        "description": "Tomato sauce, mozzarella cheese, spinach, feta cheese, and red onion.",
        "price": 11.99
    },
    {
        "name": "Mushroom and Onion Pizza",
        "description": "Creamy garlic sauce, mozzarella cheese, sautéed mushrooms, and caramelized onions.",
        "price": 12.49
    },
    {
        "name": "Mediterranean Veggie Pizza",
        "description": "Olive oil and garlic base, mozzarella cheese, artichoke hearts, roasted red peppers, kalamata olives, red onion, and feta cheese.",
        "price": 13.99
    },
    {
        "name": "Pesto and Tomato Pizza",
        "description": "Pesto sauce, mozzarella cheese, cherry tomatoes, and fresh basil.",
        "price": 11.49
    },
    {
        "name": "Roasted Veggie Pizza",
        "description": "Tomato sauce, mozzarella cheese, roasted zucchini, eggplant, red pepper, and red onion.",
        "price": 12.99
    },
    {
        "name": "BBQ Veggie Pizza",
        "description": "Barbecue sauce, mozzarella cheese, red onion, bell peppers, corn, and black beans.",
        "price": 12.99
    },
    {
        "name": "Three Cheese Pizza",
        "description": "Tomato sauce, mozzarella cheese, cheddar cheese, and parmesan cheese.",
        "price": 11.49
    },
    {
        "name": "Hawaiian Pizza (without ham)",
        "description": "Tomato sauce, mozzarella cheese, pineapple, and sometimes red onion or bell peppers.",
        "price": 11.99
    },
    {
        "name": "Vegan Veggie Pizza",
        "description": "Vegan cheese, tomato sauce, assorted vegetables like mushrooms, bell peppers, onions, and spinach.",
        "price": 13.49
    },
    {
        "name": "Greek Pizza",
        "description": "Olive oil and garlic base, mozzarella cheese, spinach, red onion, kalamata olives, tomatoes, and feta cheese.",
        "price": 12.99
    },
    {
        "name": "Caprese Pizza",
        "description": "Tomato slices, fresh mozzarella cheese, fresh basil leaves, and a balsamic reduction drizzle.",
        "price": 10.99
    },
    {
        "name": "White Pizza",
        "description": "Ricotta cheese and mozzarella cheese blend, garlic, spinach, and sometimes mushrooms or artichokes.",
        "price": 11.49
    },
    {
        "name": "Truffle Mushroom Pizza",
        "description": "Truffle oil-infused sauce, mozzarella cheese, and a variety of sautéed mushrooms.",
        "price": 13.99
    },
    {
        "name": "Roasted Garlic and Tomato Pizza",
        "description": "Roasted garlic sauce, mozzarella cheese, oven-roasted tomatoes, and fresh basil.",
        "price": 12.49
    },
    {
        "name": "Sun-Dried Tomato and Pesto Pizza",
        "description": "Pesto sauce, mozzarella cheese, sun-dried tomatoes, black olives, and arugula.",
        "price": 13.49
    },
    {
        "name": "Broccoli and Cheddar Pizza",
        "description": "Garlic sauce, mozzarella cheese, steamed broccoli, and cheddar cheese.",
        "price": 11.99
    },
    {
        "name": "Sweet Potato and Caramelized Onion Pizza",
        "description": "Olive oil base, mozzarella cheese, roasted sweet potato slices, caramelized onions, and rosemary.",
        "price": 12.99
    },
    {
        "name": "Pear and Gorgonzola Pizza",
        "description": "Olive oil base, mozzarella cheese, sliced pears, gorgonzola cheese, caramelized onions, and arugula.",
        "price": 13.49
    }
  ]
  non_veg_pizzas = [
    {
        "name": "Pepperoni Pizza",
        "price": 12.99,
        "description": "Classic pizza topped with spicy pepperoni slices."
    },
    {
        "name": "Meat Lovers Pizza",
        "price": 14.99,
        "description": "A meaty delight with pepperoni, sausage, bacon, and ham."
    },
    {
        "name": "Chicken BBQ Pizza",
        "price": 13.49,
        "description": "Grilled chicken, red onions, and BBQ sauce create a smoky flavor."
    },
    {
        "name": "Spicy Italian Sausage Pizza",
        "price": 12.99,
        "description": "For those who love a bit of heat, with spicy sausage and jalapenos."
    },
    {
        "name": "Bacon and Mushroom Pizza",
        "price": 13.99,
        "description": "Savory bacon strips paired with earthy mushrooms."
    },
    {
        "name": "Supreme Pizza",
        "price": 15.99,
        "description": "A combination of various meats, vegetables, and olives."
    },
    {
        "name": "Hawaiian Pizza (with ham)",
        "price": 12.49,
        "description": "A tropical twist with ham and pineapple chunks."
    },
    {
        "name": "Buffalo Chicken Pizza",
        "price": 13.99,
        "description": "Spicy buffalo sauce, grilled chicken, and a drizzle of ranch."
    },
    {
        "name": "Tandoori Chicken Pizza",
        "price": 14.49,
        "description": "Indian-inspired flavors with tandoori-spiced chicken and onions."
    },
    {
        "name": "Seafood Pizza",
        "price": 16.99,
        "description": "A seafood lover's dream, topped with shrimp, crab, and clams."
    },
    {
        "name": "BBQ Bacon Cheeseburger Pizza",
        "price": 15.49,
        "description": "Combines the taste of a BBQ bacon cheeseburger in pizza form."
    },
    {
        "name": "Pesto Chicken Pizza",
        "price": 13.99,
        "description": "Grilled chicken, pesto sauce, and sun-dried tomatoes."
    },
    {
        "name": "Sausage and Peppers Pizza",
        "price": 12.99,
        "description": "Italian sausage slices with colorful bell peppers."
    },
    {
        "name": "Chicken Alfredo Pizza",
        "price": 14.99,
        "description": "Creamy Alfredo sauce, tender chicken, and garlic."
    },
    {
        "name": "Meatball Pizza",
        "price": 13.49,
        "description": "Sliced meatballs, marinara sauce, and melted cheese."
    }
]

  //add new item
  addItem(item: Item) {
    item.id = this.afs.createId();
    return this.afs.collection("/PizzaList").add(item);
  }
  //get all items
  getAllItems() {
    return this.afs.collection("/PizzaList").snapshotChanges();
  }
  //update item
  updateItem(item: Item) {
    return this.afs.doc('/PizzaList/'+item.id).update(item)
  }
  //delete student
  deleteItem(item: Item) {
    return this.afs.doc("/PizzaList/" + item.id).delete();
  }
}

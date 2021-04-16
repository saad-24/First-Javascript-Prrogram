
//SHOPPING CART//

var mycart = [];
var inventory = ["rice", "apple", "mango", "watermelon", "Bread", "Eggs", "Energy Drink", "Biscuit", "oats"];
var p1 = 200
var p2 = 400
var p3 = 500
var p4 = 100
var p5 = 50
var p6 = 90
var p7 = 180
var p8 = 250
var p9 = 300


console.log("There are following items available in the store: ");
console.log(inventory);

//declare empty item arrays

var item1 = window.prompt("Enter the first item: ");
var item2 = window.prompt("Enter the second item: ");

//declare quantity of each item

quantity_1 = window.prompt("Quantity of item 1? ")
quantity_2 = window.prompt("Quantity of item 2? ")

mycart.push(item1,quantity_1);
mycart.push(item2,quantity_2);

console.log("You purchased: ");
console.log(mycart);

//if else condition

var price1 = ""

if (item1 == "rice") {
    price1 = quantity_1 * p1
} else if (item1 == "apple") {
    price1 = quantity_1 * p2
} else if (item1 == "mango") {
    price1 = quantity_1 * p3
} else if (item1 == "watermelon") {
    price1 = quantity_1 * p4
} else if (item1 == "Bread") {
    price1 = quantity_1 * p5      
} else if (item1 == "Eggs") {
    price1 = quantity_1 * p6
} else if (item1 == "Energy Drink") {
    price1 = quantity_1 * p7
} else if (item1 == "Biscuit") {
    price1 = quantity_1 * p8
} else if (item1 == "oats") {
    price1 = quantity_1 * p9
} else {
    console.log("Not found. ")
}

var price2 = ""

if (item1 == "rice") {
    price2 = quantity_2 * p1
} else if (item2 == "apple") {
    price2 = quantity_2 * p2
} else if (item2 == "mango") {
    price2 = quantity_2 * p3
} else if (item2 == "watermelon") {
    price2 = quantity_2 * p4
} else if (item2 == "Bread") {  "rice", "apple", "mango", "watermelon", "Bread", "Eggs", "Energy Drink", "Biscuit", "oats"
    price2 = quantity_2 * p5
} else if (item2 == "Eggs") {
    price2 = quantity_2 * p6
} else if (item2 == "Energy Drink") {
    price2 = quantity_2 * p7
} else if (item2 == "Biscuit") {
    price2 = quantity_2 * p8
} else if (item2 == "oats") {
    price2 = quantity_2 * p9
} else {
    console.log("Not found. ")
}

if (quantity_1 > 5) {
    console.log("Congrats! You have availed a special discount. ");
    price1 = price1 - 50
} else {
    console.log("To avail a discount you must buy atleast 5 piece per item1. Thank you! ")
}

var final_price = price1 + price2;
console.log("Your total bill is: " + final_price);

let amount_paid = window.prompt("Amount paid? ")
if (amount_paid == final_price) {
    console.log("No change due...Thanks for shopping. ")
} else if (amount_paid > final_price) {
    var change = amount_paid - final_price
    console.log("You paid: " + amount_paid + "\nTotal amount: " + final_price + "\nChange: " + change)
} else if (amount_paid < final_price) {
    var change = final_price - amount_paid
    console.log("You paid: " + amount_paid + "\nTotal amount: " + final_price + "\nChange: " + change)
    console.log("Please pay the remaining amount! ")
}



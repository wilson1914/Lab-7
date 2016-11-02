
var total =0;
 var groceryList = [
   {name: "cherios",
 	price: 3.00},
   {name: "eggs",
 	price: 4.00},
   {name: "milk",
 	price: 2.00},
   {name: "lettuce",
 	price: 1.00},
   {name: "ketchup",
 	price: 3.00},
   {name: "mustard",
 	price: 2.00},
   {name: "cookies",
 	price: 4.50},
   {name: "yogurt",
 	price: 2.00},
   {name: "creamer",
 	price: 3.00},
   {name: "bread",
 	price: 3.50},
   {name: "salsa",
 	price: 4.00}
 ];

 for (var i=0; i<groceryList.length;i++){
      
     total+=groceryList[i].price;
  
 	 console.log(groceryList[i].name+ " $" +groceryList[i].price);
  
}

console.log("total: $"+total);
var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();

});





function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);

    ID();
  
  });
  
}

function ID() {
    
    inquirer
        .prompt([
            {
                type: "input",
                name: "ID",
                message: "Enter the ID of the product you want to buy: "
            
                
            },
            {
                type: "input",
                name: "units",
                message: "How many units of this product would you like to purchase? "
            }
        ])
        .then(function(val){
       
          var userItemID = parseFloat(val.ID);
          var userItemQuantity = parseFloat(val.units);

            checkForItemId(userItemQuantity, userItemID);

        

            

       
        });

}


function checkForItemId(userItemQuantity, userItemID){
   console.log(userItemID);
   
    connection.query("SELECT * FROM products WHERE id = ?", [userItemID], function(err, results) {
            if (err) {
                console.log(err);
            };
         
            var price = results[0].price;
            
            var quantity = results[0].stock_quantity;
            console.log(quantity);
            if(quantity >= userItemQuantity) {
                console.log("We have enough");
                console.log("Your order total is $" + userItemQuantity * price);
                decreaseQuantity(userItemQuantity, quantity, userItemID);
                // Quantity = Quantity - userItemQuantity;
            }
            else {
                console.log("We do not have enough of that");
            }

        });
       
}

function decreaseQuantity(userItemQuantity, quantity, userItemID) {
    quantity = quantity - userItemQuantity;
    connection.query("UPDATE products SET stock_quantity = ? WHERE id = ? ", [quantity, userItemID], function(err, results){
        if (err) {
            console.log(err);
        };
        
        console.log(results.affectedRows + " record(s) updated");


    });
}
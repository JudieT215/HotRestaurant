var express = require("express");

var app = express();
var PORT = 4000;

var customer = [
  {
    name: "Jim",
    phone: "215-555-5555",
    email: "jim@jimmyjim.net",
    unique_id: 77777
  },

  {
    name: "Joan",
    phone: "215-566-6666",
    email: "joan@gmail.com",
    unique_id: 3455
  }
];
app.get("/", function(req, res) {
  res.send("Hello! Make a reservation.");
});

app.get("/:customer", function(req, res) {
  res.json(customer);
});

app.listen(PORT, function() {
  console.log("App is listening on PORT " + PORT);
});

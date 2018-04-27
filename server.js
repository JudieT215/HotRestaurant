var express = require("express");
var path = require("path");

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
//   res.send("Hello! Make a reservation.");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/res", function(req, res) {
  res.sendFile(path.join(__dirname, "res.html"));
});

app.get("/table/customer", function(req, res) {
  return res.json(customer);
});

app.listen(PORT, function() {
  console.log("App is listening on PORT " + PORT);
})


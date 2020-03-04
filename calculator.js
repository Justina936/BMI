//jshint esversion:6

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res){

  res.sendFile(__dirname + "/bmiCalculator.html");

});
app.post("/", function(req, res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  result = weight/((height*height)/100);

  res.send("<h1> Your BMI is</h1>" +result);


});



app.listen(3000, function(){

  console.log("Server started on port 3000.");

});

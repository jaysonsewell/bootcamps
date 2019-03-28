var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there");
});

app.get("/speak/:animal", function(req,res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "MEow",
        goldfish: "..."
    }  
    var animal = req.params.animal;
    var sound = sounds[animal];
/*
    var animal = req.params.animal;
    var sound = "";
    if(animal === "pig"){
        sound = "oink";
    } else if(animal === "cow"){
        sound = "MOO";
    } else {
        sound = "Unknown Sound";
    }
*/
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:message/:times", function(req,res){
   var message = req.params.message;
   var times = Number(req.params.times);
   var results = "";
   
   for(var i = 0; i < times; i++){
       results += message + " ";
   }
   res.send(results);
});

app.get("*", function(req,res){
   res.send("Page not found... What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});

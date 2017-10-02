var express=require("express");
var fs = require("fs");
var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectID;
var formidable = require("express-formidable");
var bodyParser=require("body-parser");
var bodyParser1=require("body-parser");
var hbs = require("hbs");
var path = require('path');
var React=require ("react");


var userName1;
var userPass;

var app=express();


app.set("view engine", "hbs");
app.use(express.static(__dirname));
app.use(formidable());
var server=require("http").createServer(app);
var io=require("socket.io")(server, {cookie: false});
var urlencodedParser = bodyParser.urlencoded({extended: false});

var url = "mongodb://localhost:27017/usersdb";

server.listen(3000);

app.post("/enterPage", urlencodedParser, function (req, res) {
    if(!req.fields) return res.sendStatus(400);
    console.log(req.fields);
    this.userName1=req.fields.name;
    this.userName2=req.fields.name;
    this.userPass=req.fields.pass;
    var data=fs.readFileSync("users.json", "utf-8");
    console.log(req.fields.name );
    console.log(req.fields.pass );
    var users=JSON.parse(data);
    console.log(users );
     

    if (this.userName1==users.name && this.userPass==users.pass) {
                console.log("Wwwwwwwwwwwwwwwwwwwwwwwwww");
                res.sendFile(path.join(__dirname + '/index2.html'));
                }
    else {
           res.render("enterPage.hbs", {answer: "Login or password is not correct"});
          
         }
   });

app.get("/carPage", function(req, res){
    res.sendFile(path.join(__dirname + '/index3.html'));
});

app.get("/motoPage", function(req, res){
    res.sendFile(path.join(__dirname + '/index4.html'));
});

app.get("/truckPage", function(req, res){
    res.sendFile(path.join(__dirname + '/index5.html'));
});

//post-запрос при добавлении объявления на страницу с автомобилями

app.post("/carPage", urlencodedParser, function(req, res) {
     
    if(!req.fields) return res.sendStatus(400);
    if (!req.files) return res.sendStatus(400);

    
    
    console.log("ABOUT TO PARSE");
    
    
        console.log("PARSING NODE");
        console.log(req.files.file.path);
        var oldpath=req.files.file.path;
        var newpath='C:/node/project_webpack/'+req.files.file.name;
        fs.rename(oldpath, newpath);
        
    
     
    var userId = req.fields.id;
    var title = req.fields.text1;
     console.log(title);
    var photo=req.files.file.name;
    
    
    var year=req.fields.text2;
    var userName=req.fields.text3;
    var phoneNum=req.fields.text4;
    var dateAdd = (new Date()).toDateString();
    var car = {id: userId, text1: title, file: photo, text2: year, text3: userName, text4: phoneNum, time: dateAdd};
    console.log(car); 
    mongoClient.connect(url, function(err, db){
        
        db.collection("cars").insertOne(car, function(err, result){
             
            if(err) return res.status(400).send();
             
            res.sendFile(path.join(__dirname + '/index3.html'));        
            this.photo1=car.file;
            db.close();
        });
        
    });
});

//post-запрос при добавлении объявления на страницу с мотоциклами

app.post("/motoPage", urlencodedParser, function(req, res) {
     
    if(!req.fields) return res.sendStatus(400);
    if (!req.files) return res.sendStatus(400);

    
    
    console.log("ABOUT TO PARSE");
    
    
        console.log("PARSING NODE");
        console.log(req.files.file.path);
        var oldpath=req.files.file.path;
        var newpath='C:/node/project_webpack/'+req.files.file.name;
        fs.rename(oldpath, newpath);
        
    
     
    var userId = req.fields.id;
    var title = req.fields.text1;
     console.log(title);
    var photo=req.files.file.name;
    
    
    var year=req.fields.text2;
    var userName=req.fields.text3;
    var phoneNum=req.fields.text4;
    var dateAdd = (new Date()).toDateString();
    var moto = {id: userId, text1: title, file: photo, text2: year, text3: userName, text4: phoneNum, time: dateAdd};
    console.log(moto); 
    mongoClient.connect(url, function(err, db){
        
        db.collection("motos").insertOne(moto, function(err, result){
             
            if(err) return res.status(400).send();
             
           res.sendFile(path.join(__dirname + '/index4.html'));          
            this.photo1=moto.file;
            db.close();
        });
        
    });
});

//post-запрос при добавлении объявления на страницу с грузовиками

app.post("/truckPage", urlencodedParser, function(req, res) {
     
    if(!req.fields) return res.sendStatus(400);
    if (!req.files) return res.sendStatus(400);

    
    
    console.log("ABOUT TO PARSE");
    
    
        console.log("PARSING NODE");
        console.log(req.files.file.path);
        var oldpath=req.files.file.path;
        var newpath='C:/node/project_webpack/'+req.files.file.name;
        fs.rename(oldpath, newpath);
        
    
     
    var userId = req.fields.id;
    var title = req.fields.text1;
     console.log(title);
    var photo=req.files.file.name;
    
    
    var year=req.fields.text2;
    var userName=req.fields.text3;
    var phoneNum=req.fields.text4;
    var dateAdd = (new Date()).toDateString();
    var truck = {id: userId, text1: title, file: photo, text2: year, text3: userName, text4: phoneNum, time: dateAdd};
    console.log(truck); 
    mongoClient.connect(url, function(err, db){
        
        db.collection("trucks").insertOne(truck, function(err, result){
             
            if(err) return res.status(400).send();
             
            res.sendFile(path.join(__dirname + '/index5.html'));         
            this.photo1=truck.file;
            db.close();
        });
        
    });
});

//post-запрос при удалении одного объявления со страницы с автомобилями
app.post("/mainPage1", urlencodedParser, function(req, res){
      
    var id = new objectId(req.fields.id);
    
    mongoClient.connect(url, function(err, db){
         db.collection("cars").findOne({_id: id}, function(err, doc) {
                                            
                                             
       });

        db.collection("cars").deleteOne({_id: id}, function(err, result){
             
            if(err) return res.status(400).send();
       
            db.close();
        });
        
    });
       res.sendFile(path.join(__dirname + '/index3.html'));
       console.log("Poslano");  
});

//post-запрос при удалении одного объявления со страницы с мотоциклами
app.post("/mainPage2", urlencodedParser, function(req, res){
      
    var id = new objectId(req.fields.id);
    
    mongoClient.connect(url, function(err, db){
         db.collection("motos").findOne({_id: id}, function(err, doc) {
                                            
                                             
       });

        db.collection("motos").deleteOne({_id: id}, function(err, result){
             
            if(err) return res.status(400).send();
       
            db.close();
        });
        
    });
       res.sendFile(path.join(__dirname + '/index4.html'));
       console.log("Poslano");  
});

//post-запрос при удалении одного объявления со страницы с грузовиками
app.post("/mainPage3", urlencodedParser, function(req, res){
      
    var id = new objectId(req.fields.id);
    
    mongoClient.connect(url, function(err, db){
         db.collection("trucks").findOne({_id: id}, function(err, doc) {
                                            
                                             
       });

        db.collection("trucks").deleteOne({_id: id}, function(err, result){
             
            if(err) return res.status(400).send();
       
            db.close();
        });
        
    });
       res.sendFile(path.join(__dirname + '/index5.html')); 
       console.log("Poslano");  
});


io.sockets.on("connection", function(socket){

//запрос при загрузке страницы с автомобилями когда выводятся на экран все объявления с автомобилями
   socket.on("event", function(data) {
       console.log(this.userName2);
   
    mongoClient.connect(url, function(err, db){
        db.collection("cars").find({}).toArray(function(err, cars){
            console.log(cars);
            socket.emit("event1", {cars});
            db.close();
        });
    });
    
   });

//запрос при загрузке страницы с мотоциклами когда выводятся на экран все объявления с мотоциклами

socket.on("event2", function(data) {
       console.log(this.userName2);
   
    mongoClient.connect(url, function(err, db){
        db.collection("motos").find({}).toArray(function(err, motos){
            console.log(motos);
            socket.emit("event3", {motos});
            db.close();
        });
    });
    
   });

//запрос при загрузке страницы с грузовиками когда выводятся на экран все объявления с грузовиками

socket.on("event4", function(data) {
       console.log(this.userName2);
   
    mongoClient.connect(url, function(err, db){
        db.collection("trucks").find({}).toArray(function(err, trucks){
            console.log(trucks);
            socket.emit("event5", {trucks});
            db.close();
        });
    });
    
   });

});


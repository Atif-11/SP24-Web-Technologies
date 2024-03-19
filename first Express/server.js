const express = require("express");
let server = express();
server.set("view engine","ejs");
server.use(express.static("public"));
server.get("/", function(req,res){
    res.render("homepage");
}) 
server.get("/assignment-1",function(req,res){
    res.render("cv.ejs");
})
server.listen(3000);
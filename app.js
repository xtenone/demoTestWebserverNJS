//-----------------------------------------------------------------------------------
// node packages and consts
const express = require("express");
const app = express();

const https = require("https");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//-----------------------------------------------------------------------------------
// -------- gets requested by client
app.get("/", function (req, res) { // init
    console.log("-------------------------------------------------------");
    console.log("1. point1");
    res.send("welcome to the server, go to /anotherpageofnothing to see more!");
})
app.get("/anotherpageofnothing", function (req, res) { 
    console.log("-------------------------------------------------------");
    console.log("2. point2");
    let aaa =   {
                "employees":[
                    {"firstName":"John", "lastName":"Doe"},
                    {"firstName":"Anna", "lastName":"Smith"},
                    {"firstName":"Peter", "lastName":"Jones"}
                ]
                }
    res.send(aaa);
})

// //-----------------------------------------------------------------------------------
// // -------- posts done by client
// app.post("/anotherpageofnothing", function (req, res) {
//     console.log("-------------------------------------------------------");
//     console.log("post1");
//     console.log(res); // print posted
//     console.log(res.req.body.but); // send data
//     console.log("post2");
//     if (res.req.body.but === 'Update_1') {
//         console.log("3. UPDATE 1");
//     }
// })


//-----------------------------------------------------------------------------------
// server watching incomming requests 
app.listen(3000, function () {
    console.log("the server is running on port 3000");
})

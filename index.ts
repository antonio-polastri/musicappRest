//https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/
//https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

import { Console } from "console";

//https://www.typescripttutorial.net/typescript-tutorial/nodejs-typescript/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require('dotenv').config()
var corsOptions = {
    // origin: "http://localhost:8100"
     origin: "*"
   };
 
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req:any, res:any) => {
    res.json({ message: "Welcome to Music Rest application." });
  });

//add routng
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/data.routes')(app);

 const PORT = process.env.PORT || 9999;
 
app.listen(PORT, () => {
  
    
    ()=>{console.log('adad')}
    console.log('The application is listening on port 9999!');
})
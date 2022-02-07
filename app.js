
//Name: Atharva Joshi
//Subject: CS561 Software Engineering Methods
const express = require('express');
const bodyParser = require("body-parser");
const res = require('express/lib/response');
const router = express.Router();
const app = express();
// adding rouuter in express app 
app.use("/",router)

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/v1/auth', (req,res) => {
    var user_name = req.body.user;
    var password = req.body.password;
    if (user_name == "joshiat" && password =='abcd123')
    {
        res.json( {"accesss-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        "expires": "2021-02-05T20:47:43.511Z"})
    }
    else {
        res.status(400)
        res.json("BAD REQUEST")

    }
});

app.listen(3000,() => {
console.log("Programm running on PORT 3000");
})


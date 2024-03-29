const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1= require('sha1');
const jwt = require("jsonwebtoken");

routes.post("/", async(req, res)=>{
    // console.log(req.body);
    let {username, password} = req.body;
    let result = await Admin.find({ username : username});
    // console.log(result)
    if(result.length >= 1)
    {
        if(result[0].password == sha1(password))
        {
           let obj = { id : result[0]._id } ;
           let token = jwt.sign(obj, "hiwade");
           res.send({ success : true, token : token})
        }
        else
        {
            res.send({ success : false, type : 2})
        }
    }
    else{
        res.send({ success : false, type : 1})
    }
})

module.exports = routes;
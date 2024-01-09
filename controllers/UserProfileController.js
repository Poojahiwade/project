const routes = require("express").Router();
const jwt = require("jsonwebtoken")
const user = require("../models/Users")

routes.get("/", async(req, res)=>{
    // console.log(req.headers.authorization)
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "hiwade")
    // console.log(obj)
    let _id = obj._id;

    let result = await user.find({_id : _id});
    res.send({ success : true, result : result[0]});

    // res.send({name : 'Pooja'})
})
module.exports = routes;
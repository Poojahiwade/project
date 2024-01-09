const routes = require("express").Router();
const City = require("../models/City")

routes.get("/", async(req, res)=>{
    // res.send()
    let ans = await City.find();
    res.send(ans);
})

routes.get("/state", async(req, res)=>{
    let ans = await City.distinct("state");
    res.send(ans)
})

routes.get("/getcity/:a", async(req, res)=>{
    let x = req.params.a;
    let ans = await City.find({state : x});
    res.send(ans)
})
module.exports = routes;

const mongoose = require("mongoose")
require("../config/db")

let AdminSchema = mongoose.Schema({
    username : String,
    password : String
},{collection : "admin"})

module.exports = mongoose.model("admin",AdminSchema)
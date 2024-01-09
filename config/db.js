require("mongoose").connect("mongodb://0.0.0.0:27017/sirproject").then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log("DB --------Not connected")
})
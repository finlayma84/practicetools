const express = require("express"),
    app = express()

app.set("view engine", "ejs");



app.get("/", (req, res)=>{
    res.render("sixMagicTempos")
})


app.listen(process.env.PORT || 8000,()=>{
    console.log("My name is Frasier Crane, and I am listening!")
})
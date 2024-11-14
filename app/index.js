process.env.PWD = process.cwd()
const express = require("express")
const path = require("path")
const react = require("react")
var app = express()

app.use(express.static(process.env.PWD + '/app'));


/* APP */
app.get("/", function(request,response) {
    response.sendFile(path.join(__dirname, "templates", "index.html"))
})

app.listen(10000, function () {
    console.log("Application running on Port %d", 10000)
}); 
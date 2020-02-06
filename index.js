const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")

let myItems = []
 const app = express()
 app.engine("ejs", ejs.renderFile)

 app.use(bodyParser.urlencoded({ extended:false}))

 app.get('/todoList',(request, response)=> {
   response.render("index.ejs", {myItems}) 
 })
 app.post('/todoList', (request, response)=>{
   const myrequest = request.body.inputItem
   myItems.push(myrequest);
   console.log(myItems);
   console.log(myItems.length, "ma longuer");
   response.render("index.ejs", {myItems})
 })



 app.listen(8080)
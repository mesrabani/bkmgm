const { Router } = require("express");
const express = require("express")
const { $where } = require("../../models/Book")
const router = express.Router()

const Book = require(`../../models/Book`)

router.get("/test", function(req, res) {
    res.send("Book test Route is Working Fine")
})


router.get("/", (req, res) => {
    Book.find()
    //.then( res.send("Home Route is Working Fine"))
    .then( books => res.json(books))
    .catch( err => res.status(404).json( {nobooksfound: "No Books  Found"} ))
})

 router.get("/:id", (req, res) =>  {
     Book.findById(req.params.id)
    // .then( res.send("Found the book with particular id" ${req.params.id}`))
     .then( books => res.json(book) )
     .catch( err => res.status(404).json( {nobooksfound: "No Books Found"} ))
 })

router.post("/", (req,res) =>  {
    Book.creat(req.body)
    //.then( res.send("Home Route is Working Fine"))
    .then( books => res.json( { msg : "Book added successfully"} ))
    .catch( err => res.status(404).json( {nobooksfound: "No Books Found"} ))
})

router.put("/:id", (req,res)=> {
   Book.findByIdAndDelete(req.param.id,req.body)
   //.then( res.send("Home Route is Working Fine"))
   .then( books => res.json( { msg: "update the book successfully"} ))
   .catch( err => res.status(404).json( {nobooksfound: "No Books Found"} ))
 })
    
 router.delete("/:id", (req,res)=> {
    Book.findByIdAndDelete(req.param.id,req.body)
    //.then( res.send("Home Route is Working Fine"))
    .then( books => res.json( { msg: "book entry delted successfully"} ))
    .catch( err => res.status(404).json( {nobooksfound: "No such Books Found"} ))
  })
 module.exports = router
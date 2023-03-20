const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        requird: true
    },
author : {
    type: String,
    required: true
},
description:{
    type: String,
},
piblisher: {
    type: String
},
updated_date: {
    type: Date,
    defult: Date.now
}
})

module.exports = Book = mongoose.model("book", BookSchema); 
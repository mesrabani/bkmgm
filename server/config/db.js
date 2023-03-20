const mongoose = require("mongoose")
const db = "mongodb+srv://Srabani:sr200209@cluster0.hpccmaz.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })
    }
    catch (err) {
        console.error(err.message);
        process.exit(1)
    }
} 
module.exports = connectDB








//const { MongoClient } = require("mongodb")
//const Db = process.env.ATLAS-URIError

//const client = new MongoClient(Db, {
  //  useNewUrlParser: true,
    // useNewUrlparserUnfiedTopology: true,
//})

//var _db

//module.exports = {
  //  connectToServer: function (callback) {
    //    client.connect( function (err,db) {
      //      if(db) {
        //        _db = db.db("srabani")
          //      console.log("connected atlas")
            //  }
              //  return callback(err)
            //})
        //},
        //getDb: function () {
          //  return _db
        //}
    //}


const mongoose = require('mongoose')

const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";

const ConnectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = ConnectToMongo;
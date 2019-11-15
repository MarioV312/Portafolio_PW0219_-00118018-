const Mongoose = require("mongoose");

let database = "RegisterDB";
let port = "27017";
let host = "localhost";
let uri = `mongodb://${host}:${port}/${database}`

const connect = () =>{
    Mongoose.connect(uri, {useNewIrlParse: true, useUnifiedTopology: true})
    .then( () => {
        
    })
}
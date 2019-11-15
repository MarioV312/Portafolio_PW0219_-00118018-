const Mongoose = require("mongoose");

const RegisterSchema = Mongoose.Schema({
    carnet: {type: String, required: true},
    schedule: String,
    isLate: Boolean,
    datetime: Date
});

module.exports= Mongoose.model("Register", RegisterSchema);
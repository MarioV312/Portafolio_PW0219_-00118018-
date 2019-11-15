const Register = require("../models/Register");
const registerController = {};

registerController.insert = (req,res) => {
    if(!req.body.carnet || !req.body.schedule){
        return res.status(400).json({
            message: "There are missing fields",
        });
    }
}

let register = new Register(
    req.body
);

register.datetime = new Date();

register.save((err,nRegister)=>{
    if(err) return res.status(500).json({
        message: "Inser registration was successful",
    })

    res.status(200).json({
        message: "Insert registration was successful",
        register: nRegister
    });
});



registerController.updateById = (req,res) => {
    let register = req.body;

    if(!register._id){
        return res.status(400).json({message: "id is needed"});
    }

    Register.update({_id: register._id}, register)
        .then(value =>{
            res.status(200).json({message: "Updated!"});
        })
        .catch((err) =>{
            res.status(500).json({err: err});
        })
}

registerController.deleteById = (req,res) =>{
    let register = req.body;

    if(!register._id){
        return res.status(400).json({message: "id is needed"});
    }

    Register.deleteONe({_id: register._id}, register)
        .then(value =>{
            res.status(400).send({err : err});
        })
        .catch((err) =>{
            res.status(200).json({message : "Successfully deleted!"});
        });
}

module.exports = registerController;
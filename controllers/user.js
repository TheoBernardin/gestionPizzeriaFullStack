function createUser(req, res) {
    let User = require('../models/user');
    let newUser = User ({
        nom: req.body.nom,
        prenom : req.body.prenom,
        telephone : req.body.telephone
    });
  
    newUser.save()
    .then((savedUser) => {

        //send back the created User
        res.json(savedUser);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

 function readUser(req, res) {

    let User = require("../models/user");

    User.findById({_id : req.params.id})
    .then((user) => {
        res.status(200).json(user);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateUser(req, res){

    let User = require("../models/user");

    User.findByIdAndUpdate({_id: req.params.id}, 
        {nom : req.body.nom, 
        prenom : req.body.prenom,
        telephone : req.body.telephone},
        {new : true})
    .then((updatedUser) => {
        res.status(200).json(updatedUser);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteUser(req, res){

    let User = require("../models/user");

    User.findOneAndRemove({_id : req.params.id})
    .then((deletedUser) => {
        res.status(200).json(deletedUser);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.read = readUser;
module.exports.create = createUser;
module.exports.update = updateUser;
module.exports.delete = deleteUser;

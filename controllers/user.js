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

function readUsers(req, res) {

    let User = require("../models/user");

    User.find({})
    .then((users) => {
        res.status(200).json(users);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.reads = readPizzas;
module.exports.create = createUser;
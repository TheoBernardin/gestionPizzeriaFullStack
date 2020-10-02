function createCommand(req, res) {
    let Command = require('../models/command');
    let newCommmand = Command ({
        client : req.body.client,
        pizza : req.body.pizza,
        prix : req.body.prix
    });
  
    newCommand.save()
    .then((savedCommand) => {

        //send back the created Command
        res.json(savedCommand);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

 function readCommand(req, res) {

    let Pizza = require("../models/command");

    Command.findById({_id : req.params.id})
    .then((command) => {
        res.status(200).json(command);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updatePizza(req, res){

    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        {nom : req.body.nom, 
        ingredients : req.body.ingredients,
        taille : req.body.taille,
        prix : req.body.prix}, 
        {new : true})
    .then((updatedTodo) => {
        res.status(200).json(updatedTodo);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteCommand(req, res){

    let Pizza = require("../models/pizza");

    Pizza.findOneAndRemove({_id : req.params.id})
    .then((deletedPizza) => {
        res.status(200).json(deletedPizza);
    }, (err) => {
        res.status(500).json(err);
    });

 }

module.exports.reads = readPizzas;
module.exports.create = createPizza;
module.exports.read = readPizza;
module.exports.update = updatePizza;
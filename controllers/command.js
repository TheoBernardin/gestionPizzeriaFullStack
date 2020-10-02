function createCommand(req, res) {
    let Command = require('../models/command');
    let newCommand = Command ({
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

    let Command = require("../models/command");

    Command.findById({_id : req.params.id})
    .then((command) => {
        res.status(200).json(command);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateCommand(req, res){

    let Command = require("../models/command");

    Command.findByIdAndUpdate({_id: req.params.id}, 
        {client : req.body.client, 
        pizza : req.body.pizza,
        prix : req.body.prix}, 
        {new : true})
    .then((updatedCommand) => {
        res.status(200).json(updatedCommand);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteCommand(req, res){

    let Command = require("../models/command");

    Command.findOneAndRemove({_id : req.params.id})
    .then((deletedCommand) => {
        res.status(200).json(deletedCommand);
    }, (err) => {
        res.status(500).json(err);
    });

 }

module.exports.create = createCommand;
module.exports.delete = deleteCommand;
module.exports.read = readCommand;
module.exports.update = updateCommand;

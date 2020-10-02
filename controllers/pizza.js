function createPizza(req, res) {
    let Pizza = require('../models/pizza');
    let newPizza = Pizza ({
        nom: req.body.nom,
        ingredients : req.body.ingredients,
        taille : req.body.taille,
        prix : req.body.prix
    });
  
    newPizza.save()
    .then((savedPizza) => {

        //send back the created Pizza
        res.json(savedPizza);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readPizzas(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.find({})
    .then((pizzas) => {
        res.status(200).json(pizzas);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readPizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findById({_id : req.params.id})
    .then((pizza) => {
        res.status(200).json(pizza);
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

module.exports.reads = readPizzas;
module.exports.create = createPizza;
module.exports.read = readPizza;
module.exports.update = updatePizza;
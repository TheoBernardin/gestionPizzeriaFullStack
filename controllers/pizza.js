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

        //send back the created Todo
        res.json(savedPizza);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

module.exports.create = createPizza;
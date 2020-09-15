//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/pizza", (req, res) => {
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

});
//READ
router.get("/pizzas", (req, res) => {
    res.json({"msg": "Get all the pizzas"});
});

router.get("/pizza", (req, res) => {
    res.json({"msg": "Get a pizza"});
});

//UPDATE
router.put("/pizza", (req, res) => {
    res.json({"msg": "Update a pizza"});
});

//DELETE
router.delete("/pizza", (req, res) => {
    res.json({"msg": "Delete a pizza"});
});

module.exports = router;
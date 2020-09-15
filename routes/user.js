//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/user", (req, res) => {
    let User = require('../models/user');
    let newUser = User ({
        nom: req.body.nom,
        prenom : req.body.prenom,
        telephone : req.body.telephone
    });
  
    newUser.save()
    .then((savedUser) => {

        //send back the created Todo
        res.json(savedUser);
            
    }, (err) => {
        res.status(400).json(err)
    });

});

//READ
router.get("/users", (req, res) => {
    res.json({"msg": "Get all the users"});
});

router.get("/user", (req, res) => {
    res.json({"msg": "Get a user"});
});

//UPDATE
router.put("/user", (req, res) => {
    res.json({"msg": "Update a user"});
});

//DELETE
router.delete("/user", (req, res) => {
    res.json({"msg": "Delete a user"});
});

module.exports = router;
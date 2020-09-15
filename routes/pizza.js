//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/pizza');

//CREATE
router.post("/pizza", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/pizzas", (req, res) => {
    
    controller.reads(req, res);
    
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
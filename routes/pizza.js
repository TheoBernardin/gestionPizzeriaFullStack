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

router.get("/pizza/:id", (req, res) => {
    
    controller.read(req, res);
});

//UPDATE
router.put("/pizza/:id", (req, res) => {

    controller.update(req, res);
});

//DELETE
router.delete("/pizza/:id", (req, res) => {

    controller.delete(req,res);
});

module.exports = router;
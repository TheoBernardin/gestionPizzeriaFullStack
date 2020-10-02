//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/command');

//CREATE
router.post("/command", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/command/:id", (req, res) => {
    
    controller.read(req, res);
});

//UPDATE
router.put("/command/:id", (req, res) => {

    controller.update(req, res);
});

//DELETE
router.delete("/command/:id", (req, res) => {

    controller.delete(req,res);
});

module.exports = router;
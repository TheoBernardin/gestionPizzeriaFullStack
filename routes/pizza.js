//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/pizza", (req, res) => {
    
    res.json({"msg": "Create a pizza"});
});

//READ
router.get("/pizzas", (req, res) => {
    res.json({"msg": "Get all the pizzas"});
});

router.get("/pizza", (req, res) => {
    res.json({"msg": "Get a todo"});
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
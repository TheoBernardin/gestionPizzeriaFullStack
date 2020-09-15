//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/user", (req, res) => {
    
    res.json({"msg": "Create a user"});
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
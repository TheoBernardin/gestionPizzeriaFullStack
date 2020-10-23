function createOrder(req, res) {
    let Order = require('../models/order');
    let newOrder = Order ({
        client : req.body.client,
        pizza : req.body.pizza,
        prix : req.body.prix
    });
  
    newOrder.save()
    .then((savedOrder) => {

        //send back the created order
        res.json(savedOrder);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

 function readOrder(req, res) {

    let Order = require("../models/order");

    Order.findById({_id : req.params.id})
    .then((order) => {
        res.status(200).json(order);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateOrder(req, res){

    let Order = require("../models/order");

    Order.findByIdAndUpdate({_id: req.params.id}, 
        {client : req.body.client, 
        pizza : req.body.pizza,
        prix : req.body.prix}, 
        {new : true})
    .then((updatedOrder) => {
        res.status(200).json(updatedOrder);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteOrder(req, res){

    let Order = require("../models/order");

    Order.findOneAndRemove({_id : req.params.id})
    .then((deletedOrder) => {
        res.status(200).json(deletedOrder);
    }, (err) => {
        res.status(500).json(err);
    });

 }

module.exports.create = createOrder;
module.exports.delete = deleteOrder;
module.exports.read = readOrder;
module.exports.update = updateOrder;

const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get("/orders", controllers.getAllOrders);
router.post("/customers/:customerId/orders", controllers.createOrder);
router.get("/customers/:customerId/addresses", controllers.getAllAddresses);
router.get("/deliveries/:deliveryId/orders", controllers.getDeliveryOrders);

module.exports = router;

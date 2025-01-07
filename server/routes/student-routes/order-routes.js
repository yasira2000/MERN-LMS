const express = require("express");

const {
  createOrder,
  capturePaymentAndFinalizeOrder,
} = require("../../controllers/student-controller/order-controller");

const router = express.Router();

router.post("/create", createOrder);
router.post("/finalize", capturePaymentAndFinalizeOrder);

module.exports = router;

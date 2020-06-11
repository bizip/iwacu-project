const express = require("express");
const router = express.Router();
const admincontroller = require("../controller/admin");
router.get('/add-product', admincontroller.getAddproduct);
// router.get('/products', admincontroller.getproducts);
router.post('/add-product', admincontroller.postAddproduct);

module.exports = router;
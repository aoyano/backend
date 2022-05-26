const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', (req, res) => res.render('cart.ejs'));
router.post('/', productController.addToCart);

module.exports = router;
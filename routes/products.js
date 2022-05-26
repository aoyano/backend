const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.addProduct);
router.post('/', productController.addToCart);
router.patch('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
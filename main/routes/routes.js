const express = require('express');
const router = express.Router();
let bookController = require('../controller/bookController');
let userController = require('../controller/userController');
let orderController = require('../controller/orderController');

router.post('/addBook', bookController.addBookController);
router.get('/books', bookController.getAllBooksController);
router.get('/sortBooks', bookController.sortAllBooksController);
router.get('/searchBook', bookController.searchBookController);
router.post('/addUser', userController.addUserController);
router.post('/orderBook', orderController.addOrderController);

module.exports = router;
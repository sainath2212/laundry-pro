const express = require('express');
const { createOrder, getOrderDetails, updateOrderStatus } = require('../controllers/orderController');
const { authenticateToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, createOrder);
router.get('/:id', authenticateToken, getOrderDetails);
router.put('/:id', authenticateToken, isAdmin, updateOrderStatus);

module.exports = router;

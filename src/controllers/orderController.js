const orderService = require('../services/orderService');

const createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getOrderDetails = async (req, res) => {
    try {
        const order = await orderService.getOrderDetails(parseInt(req.params.id));
        res.json(order);
    } catch (error) {
        res.status(404).json({ error: 'Order not found' });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        await orderService.updateOrderStatus(parseInt(req.params.id), status);
        res.json({ message: 'Order status updated' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createOrder, getOrderDetails, updateOrderStatus };

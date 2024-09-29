const orderModel = require('../models/order');

const createOrder = async (data) => {
    return await orderModel.createOrder(data);
};

const getOrderDetails = async (id) => {
    return await orderModel.findOrderById(id);
};

const updateOrderStatus = async (id, status) => {
    return await orderModel.updateOrderStatus(id, status);
};

module.exports = {
    createOrder,
    getOrderDetails,
    updateOrderStatus
};

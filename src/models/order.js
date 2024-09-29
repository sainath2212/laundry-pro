const {prisma} = require('../config/db');

const createOrder = async (data) => {
    return await prisma.order.create({
      data: {
        userId: data.userId,
        service: data.service,       
        pickupDate: new Date(data.pickupDate),
        deliveryDate: new Date(data.deliveryDate),
        status: data.status
      }
    });
  };

const findOrderById = async (id) => {
    return await prisma.order.findUnique({ where: { id } });
};

const updateOrderStatus = async (id, status) => {
    return await prisma.order.update({
        where: { id },
        data: { status }
    });
};

module.exports = {
    createOrder,
    findOrderById,
    updateOrderStatus
};

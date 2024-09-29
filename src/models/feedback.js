const {prisma} = require('../config/db');

const createFeedback = async (data) => {
    return await prisma.feedback.create({ data });
};

const findFeedbackByOrderId = async (orderId) => {
    return await prisma.feedback.findMany({ where: { orderId } });
};

module.exports = {
    createFeedback,
    findFeedbackByOrderId
};

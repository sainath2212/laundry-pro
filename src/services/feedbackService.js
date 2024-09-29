const feedbackModel = require('../models/feedback');

const submitFeedback = async (data) => {
    return await feedbackModel.createFeedback(data);
};

const getFeedbackByOrderId = async (orderId) => {
    return await feedbackModel.findFeedbackByOrderId(orderId);
};

module.exports = {
    submitFeedback,
    getFeedbackByOrderId
};

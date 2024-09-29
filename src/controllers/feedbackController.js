const feedbackService = require('../services/feedbackService');

const submitFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.submitFeedback(req.body);
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.getFeedbackByOrderId(parseInt(req.params.order_id));
        res.json(feedback);
    } catch (error) {
        res.status(404).json({ error: 'Feedback not found' });
    }
};

module.exports = { submitFeedback, getFeedback };

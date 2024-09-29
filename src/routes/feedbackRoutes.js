const express = require('express');
const { submitFeedback, getFeedback } = require('../controllers/feedbackController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, submitFeedback);
router.get('/:order_id', authenticateToken, getFeedback);

module.exports = router;

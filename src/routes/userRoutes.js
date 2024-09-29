const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:id', authenticateToken, getUserProfile);
router.put('/:id', authenticateToken, updateUserProfile);

module.exports = router;

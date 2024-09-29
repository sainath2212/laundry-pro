const userService = require('../services/userService');

const getUserProfile = async (req, res) => {
    try {
        const user = await userService.getUserProfile(parseInt(req.params.id));
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        await userService.updateUserProfile(parseInt(req.params.id), { name, email });
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getUserProfile, updateUserProfile };

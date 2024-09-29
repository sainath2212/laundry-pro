const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        await authService.registerUser(req.body.name, req.body.email, req.body.password, req.body.role);
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { token } = await authService.loginUser(req.body.email, req.body.password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = { register, login };

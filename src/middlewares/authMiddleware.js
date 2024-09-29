const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'No token provided' });

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

const isAdmin = (req, res, next) => {
    console.log(req.user)
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access only' });
    next();
};

module.exports = { authenticateToken, isAdmin };

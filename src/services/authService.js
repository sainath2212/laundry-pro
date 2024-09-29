const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

const registerUser = async (name, email, password, role) => {
    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userModel.createUser({ name, email, password: hashedPassword, role });
};

const loginUser = async (email, password) => {
    const user = await userModel.findUserByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    return { token };
};

module.exports = { registerUser, loginUser };

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

// Validation functions
const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const validatePassword = (password) => 
    /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

const registerUser = async (name, email, password, role) => {
    if (!name || !email || !password || !role) {
        throw new Error('All fields are required');
    }
    if (!validateEmail(email)) {
        throw new Error('Invalid email format');
    }
    if (!validatePassword(password)) {
        throw new Error('Password must be at least 8 characters long, contain one uppercase letter, and one special character');
    }

    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userModel.createUser({ name, email, password: hashedPassword, role });
};

const loginUser = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }
    if (!validateEmail(email)) {
        throw new Error('Invalid email format');
    }

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

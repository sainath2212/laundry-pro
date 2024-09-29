const {prisma} = require('../config/db');

const createUser = async (data) => {
    return await prisma.user.create({ data });
};

const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({ where: { email } });
};

const findUserById = async (id) => {
    return await prisma.user.findUnique({ where: { id } });
};

const updateUser = async (id, data) => {
    return await prisma.user.update({
        where: { id },
        data
    });
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    updateUser
};

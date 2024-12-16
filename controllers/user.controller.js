const { User, Bootcamp } = require('../models');

module.exports = {
    // Crear usuario
    async createUser(data){
        return await User.create(data);
    },
    // Buscar usuario por id
    async findUserById(id) {
        return await User.findByPk(id, {include: Bootcamp});
    },
    // Listar todos los usuarios
    async findAll(){
        return await User.findAll({include: Bootcamp});
    },
    // Actualizar usuario por id
    async updateUserById(id, data) {
        return await User.update(data, {where: {id}})
    },
    // Eliminar usuario por id
    async deleteUserById(id) {
        return await User.destroy({where: {id}})
    }
};
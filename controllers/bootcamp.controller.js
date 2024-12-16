const { User, Bootcamp } = require('../models');

module.exports = {
    // Crear bootcamp
    async createBootcamp(data){
        return await Bootcamp.create(data);
    },
    // Buscar bootcamp por id
    async findById(id) {
        return await Bootcamp.findByPk(id, {include: User});
    },
    // Listar todos los bootcamp
    async findAll(){
        return await Bootcamp.findAll({include: User});
    },
    // Añadir usuario a bootcamp
    async addUser(bootcampId, userId){
        const bootcamp = await Bootcamp.findByPk(bootcampId);
        const user = await User.findByPk(userId);
        return await bootcamp.addUser(user);
    }
};
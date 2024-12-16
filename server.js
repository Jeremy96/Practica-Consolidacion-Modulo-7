const {sequelize} = require('./models');
const bootcampController = require('./controllers/bootcamp.controller');
const userController = require('./controllers/user.controller');

async function main() {
    await sequelize.sync({ force: true });

    // Se crean los usuarios
    const user1 = await userController.createUser({firstName: 'Mateo', lastName: 'Diaz', email: 'mateo.diaz@correo.com'});
    const user2 = await userController.createUser({firstName: 'Santiago', lastName: 'Mejias', email: 'santiago.mejias@correo.com'});
    const user3 = await userController.createUser({firstName: 'Lucas', lastName: 'Rojas', email: 'lucas.rojas@correo.com'});
    const user4 = await userController.createUser({firstName: 'Facundo', lastName: 'Fernandez', email: 'facundo.fernadez@correo.com'});

    // Se crean los bootcamp
    const bootcamp1 = await bootcampController.createBootcamp({title: 'Introduciendo El Bootcamp De React', cue: '10', description: 'React es la librería más usada en JavaScript para el desarrollo de interfaces.'});
    const bootcamp2 = await bootcampController.createBootcamp({title: 'Bootcamp Desarrollo Web Full Stack', cue: '10', description: 'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS'});
    const bootcamp3 = await bootcampController.createBootcamp({title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning', cue: '8', description: 'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning'});

    // Se agregan los usuarios a los bootcamp
    await bootcampController.addUser(bootcamp1.id, user1.id);
    await bootcampController.addUser(bootcamp1.id, user2.id);
    await bootcampController.addUser(bootcamp2.id, user1.id);
    await bootcampController.addUser(bootcamp3.id, user1.id);
    await bootcampController.addUser(bootcamp3.id, user2.id);
    await bootcampController.addUser(bootcamp3.id, user3.id);

    //Consultando el Bootcamp por id, incluyendo los usuarios.
    const consultarBootcampPorId = await bootcampController.findById(bootcamp1.id);
    console.log('Bootcamp y sus usuarios:', JSON.stringify(consultarBootcampPorId, null, 2));

    //Listar todos los Bootcamp con sus usuarios
    const listarBootcampsUsuarios = await bootcampController.findAll();
    console.log('Listando todos los Bootcamp con sus usuarios', JSON.stringify(listarBootcampsUsuarios, null, 2));

    //Consultar un usuario por id, incluyendo los Bootcamp
    const consultarUsuarioPorId = await userController.findUserById(user1.id);
    console.log('Usuario y sus bootcamps:', JSON.stringify(consultarUsuarioPorId, null, 2));
    
    //Listar los usuarios con sus Bootcamp
    const listarUsuariosBootcamps = await userController.findAll();
    console.log('Listando todos los Usuarios con sus bootcamps', JSON.stringify(listarUsuariosBootcamps, null, 2));

    //Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez
    const actualizarUsuario = await userController.updateUserById(1, {firstName: 'Pedro', lastName: 'Sanchez'});
    console.log('Actualizando el Usuario: ', JSON.stringify(actualizarUsuario, null, 2));
    const usuarioActualizado = await userController.findUserById(1);
    console.log('Usuario Actualizado: ', JSON.stringify(usuarioActualizado, null, 2));

    //Eliminar un usuario por id; por ejemplo: el usuario con id=1
    const eliminarUsuario = await userController.deleteUserById(1);
    console.log('Usuario eliminado', JSON.stringify(eliminarUsuario, null, 2));

}

main()
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true
        },
      },
    },
    {}
  );

  User.associate = function (models) {
    User.belongsToMany(models.Bootcamp, {
      through: 'UsuariosBootcamps', 
      foreignKey: 'userId',    
      otherKey: 'bootcampId',           
    });
  };

  return User;
};
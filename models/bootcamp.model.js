'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bootcamp = sequelize.define(
    'Bootcamp',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 5,
          max: 10
        }
      },
      description: {
        type: DataTypes.STRING, 
        allowNull: false
      },
    },
    {}
  );

  Bootcamp.associate = function (models) {
    Bootcamp.belongsToMany(models.User, {
      through: 'UsuariosBootcamps', 
      foreignKey: 'bootcampId',    
      otherKey: 'userId',           
    });
  };

  return Bootcamp;
};
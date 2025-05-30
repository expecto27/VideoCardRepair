const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phone_number: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "phone_number"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Пароль пользователя"
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    verification_code: {      
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: null
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "phone_number",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "phone_number" },
        ]
      },
    ]
  });
};

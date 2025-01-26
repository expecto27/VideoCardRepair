const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gpus', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Название видеокарты",
      unique: "name"
    },
    brand: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Производитель (например, NVIDIA, AMD)"
    },
    model: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Модель (например, RTX 3080, RX 6800 XT)"
    },
    memory_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Объем памяти (в МБ)"
    },
    chip_frequency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Частота чипа (в МГц)"
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Год выпуска"
    }
  }, {
    sequelize,
    tableName: 'gpus',
    timestamps: true,
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};

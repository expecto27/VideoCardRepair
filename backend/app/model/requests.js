const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requests', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'services',
        key: 'id'
      }
    },
    postamat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'postamats',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('created','in_progress','completed','paid'),
      allowNull: true,
      defaultValue: "created"
    },
    postamat_drop_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    postamat_pickup_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    gpu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Ссылка на видеокарту",
      references: {
        model: 'gpus',
        key: 'id'
      }
    },
    photo_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Путь к прикрепленному изображению"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'requests',
    timestamps: true,
    underscored: true,
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "service_id",
        using: "BTREE",
        fields: [
          { name: "service_id" },
        ]
      },
      {
        name: "postamat_id",
        using: "BTREE",
        fields: [
          { name: "postamat_id" },
        ]
      },
      {
        name: "gpu_id",
        using: "BTREE",
        fields: [
          { name: "gpu_id" },
        ]
      },
    ]
  });
};
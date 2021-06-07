const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOAINHA', {
    ID_LOAINHA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_LOAINHA: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LOAINHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__LOAINHA__CFAA6ACD894A4C8D",
        unique: true,
        fields: [
          { name: "ID_LOAINHA" },
        ]
      },
    ]
  });
};

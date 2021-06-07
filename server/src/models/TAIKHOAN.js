const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAIKHOAN', {
    ID_TAIKHOAN: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_TAIKHOAN: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ__TAIKHOAN__6B714C8EF79FF95C"
    },
    MATKHAU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ROLE_TAIKHOAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAIKHOAN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAIKHOAN__EB942D7F98C5857A",
        unique: true,
        fields: [
          { name: "ID_TAIKHOAN" },
        ]
      },
      {
        name: "UQ__TAIKHOAN__6B714C8EF79FF95C",
        unique: true,
        fields: [
          { name: "TEN_TAIKHOAN" },
        ]
      },
    ]
  });
};

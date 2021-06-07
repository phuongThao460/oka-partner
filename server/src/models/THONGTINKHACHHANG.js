const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('THONGTINKHACHHANG', {
    ID_TT_KHACHHANG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_KHACHHANG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PHONE_NUMBER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MA_GIAYTOTUYTHAN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LOAI_GIAYTOTUYTHAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QUOCTICH: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GIOITINH: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ID_TAIKHOAN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAIKHOAN',
        key: 'ID_TAIKHOAN'
      }
    }
  }, {
    sequelize,
    tableName: 'THONGTINKHACHHANG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__THONGTIN__9C687565E53E1838",
        unique: true,
        fields: [
          { name: "ID_TT_KHACHHANG" },
        ]
      },
    ]
  });
};

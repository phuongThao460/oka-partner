const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NHA', {
    THUTU_NHA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: "UQ__NHA__A9654DEA769D9E9F"
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    ID_TT_CHUHO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'THONGTINCHUHO',
        key: 'ID_TT_CHUHO'
      }
    },
    ID_LOAINHA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'LOAINHA',
        key: 'ID_LOAINHA'
      }
    },
    TEN_NHA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FREE_CANCEL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CHECKIN: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CHECKOUT: {
      type: DataTypes.TIME,
      allowNull: true
    },
    KHOANGCACH_TRUNGTAMTP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SOTANG: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PHUPHI_BUASANG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SONHA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TEN_DUONG: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DIENTICH: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ID_QUAN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'QUAN',
        key: 'ID_QUAN'
      }
    },
    SO_NGUOI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SO_GIUONGPHU: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_BANGGIA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'BANGGIA',
        key: 'ID_BANGGIA'
      }
    },
    ID_TRANGTHAI_NHA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TRANGTHAINHA',
        key: 'ID_TRANGTHAI_NHA'
      }
    }
  }, {
    sequelize,
    tableName: 'NHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__NHA__253B662C3FA1031B",
        unique: true,
        fields: [
          { name: "ID_NHA" },
        ]
      },
      {
        name: "UQ__NHA__A9654DEA769D9E9F",
        unique: true,
        fields: [
          { name: "THUTU_NHA" },
        ]
      },
    ]
  });
};

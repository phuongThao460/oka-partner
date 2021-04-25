/* eslint-disable no-unused-vars */
const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
	return sequelize.define("UserInfo", {
		ID: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		UserName: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		PasswordUser: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: "UserInfo",
		schema: "dbo",
		timestamps: false,
		indexes: [
			{
				name: "PK__UserInfo__3214EC278CAC9399",
				unique: true,
				fields: [
					{ name: "ID" },
				]
			},
		]
	});
};

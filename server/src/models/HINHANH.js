/* eslint-disable no-unused-vars */
const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"HINHANH",
		{
			ID_HINHANH: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			ID_PHONG: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "PHONG",
					key: "ID_PHONG",
				},
			},
			HINHANH: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			GHICHU: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: "HINHANH",
			schema: "dbo",
			timestamps: false,
			indexes: [
				{
					name: "PK__HINHANH__2AC980390AD320C4",
					unique: true,
					fields: [{ name: "ID_HINHANH" }],
				},
			],
		}
	);
};

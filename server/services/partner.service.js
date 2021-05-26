/* eslint-disable no-unused-vars */
"use strict";
//npm install --save sequelize
//npm install -g mssql
//npm install -g tedious sequelize-auto || npm install --save sequelize-auto || npm install sequelize tedious
//npx sequelize-auto -h localhost -d RENTALAPARTMENT -u sa -x 12345@abc -p 1400  --dialect mssql -o './src/models'
//
const { MoleculerError } = require("moleculer").Errors;
const dbContext = require("../src/DBContext")();

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "partner",

	/**
	 * Settings
	 */
	settings: {
		// Global CORS settings for all routes
		cors: {
			// Configures the Access-Control-Allow-Origin CORS header.
			origin: "*",
			// Configures the Access-Control-Allow-Methods CORS header.
			methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
			// Configures the Access-Control-Allow-Headers CORS header.
			allowedHeaders: [],
			// Configures the Access-Control-Expose-Headers CORS header.
			exposedHeaders: [],
			// Configures the Access-Control-Allow-Credentials CORS header.
			credentials: false,
			// Configures the Access-Control-Max-Age CORS header.
			maxAge: 3600,
		},
		routes: [
			{
				path: "/api",

				// Route CORS settings (overwrite global settings)
				cors: {
					origin: ["http://localhost:3000", "https://localhost:5000"],
					methods: ["GET", "OPTIONS", "POST"],
					credentials: true,
				},
			},
		],
	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		signin: {
			rest: {
				method: "POST",
				path: "/signin",
			},
			params: {
				username: { type: "string", min: 3 },
				password: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { username, password } = params;
				if (!username && !password) {
					throw new MoleculerError("Không có người dùng này");
				}
				// Test 1: http://localhost:3000/api/partner/signin?username=demo1&password=abc123
				const checkUser = await dbContext.TAIKHOAN.findOne({
					where: {
						TEN_TAIKHOAN: username,
						MATKHAU: password,
					},
				});
				if (checkUser == null) {
					return "Không có người dùng này";
				} else {
					return checkUser.ID_TAIKHOAN;
				}
			},
		},
		register: {
			rest: {
				method: "POST",
				path: "/register",
			},
			params: {
				username: { type: "string", min: 3 },
				password: { type: "string", min: 6 },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { username, password } = params;
				if (!username && !password) {
					throw new MoleculerError(
						"Username and Password is incorrect"
					);
				}
				//http://localhost:3000/api/user/sigin/signin?username=b@gmail.com&password=1111111
				const createUser = await dbContext.TAIKHOAN.create({
					TEN_TAIKHOAN: username,
					MATKHAU: password,
				});
				return createUser;
			},
		},
		getListStyle: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListStyle",
			},
			async handler() {
				const getList = await dbContext.STYLE.findAll();
				return getList;
			},
		},
		getDetailApartment: {
			rest: {
				method: "GET",
				path: "/registrationDetail/getDetailApartment",
			},
			async handler({ action, params, meta, ...ctx }) {
				const { id } = params;
				const checkDetail = await dbContext.NHA.findAll({
					where: {
						ID_NHA: id,
					},
				});
				if (checkDetail == null) {
					return "Không có căn hộ này";
				}
				return checkDetail;
			},
		},
		getListPropFaci: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListPropFaci",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getList = await dbContext.CSVC.findAll({
					include: ["CHITIETCSVC"],
				});
				return getList;
			},
		},
		getListHouseFaci: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListHouseFaci",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getList = await dbContext.CSVCNHA.findAll();
				return getList;
			},
		},
		getListRoomFacility: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListRoomFacility",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getList = await dbContext.NOITHAT.findAll({
					include: ["CTNT"],
				});
				return getList;
			},
		},
		getRoomType: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getRoomType",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getType = await dbContext.LOAIPHONG.findAll();
				return getType;
			},
		},
		getBedType: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getBedType",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getType = await dbContext.LOAIGIUONG.findAll();
				return getType;
			},
		},
		getListCountry: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListCountry",
			},
			async handler(ctx) {
				const listCountry = dbContext.THANHPHO.findAll();
				return listCountry;
			},
		},
		getListCity: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListCity",
			},
			params: {
				countryId: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { countryId } = params;
				const listCity = dbContext.THANHPHO.findAll({
					where: {
						ID_THANHPHO: countryId,
					},
				});
				return listCity;
			},
		},
		getListDistrict: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListDistrict",
			},
			params: {
				cityId: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { cityId } = params;
				const checkCity = await dbContext.QUAN.findAll({
					where: {
						ID_THANHPHO: cityId,
					},
				});
				return checkCity;
			},
		},
		createApartment: {
			rest: {
				method: "POST",
				path: "/registrationDetail/createApartment",
			},
			params: {
				idNha: { type: "string" },
				tenNha: { type: "string" },
				ngayDat: { type: "string" },
				checkIn: { type: "string" },
				checkOut: { type: "string" },
				khoangCachTT: { type: "string" },
				soTang: { type: "string" },
				buaSang: { type: "string" },
				soNha: { type: "string" },
				tenDuong: { type: "string" },
				dienTich: { type: "string" },
				soNguoi: { type: "string" },
				soGiuongPhu: { type: "string" },
				ghiChu: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const getType = await dbContext.LOAIPHONG.findAll();
				return getType;
			},
		},
		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string",
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};
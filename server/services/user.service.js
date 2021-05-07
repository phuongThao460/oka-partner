/* eslint-disable no-unused-vars */
"use strict";
//npm install --save sequelize
//npm install -g mssql
//npm install -g tedious sequelize-auto || npm install --save sequelize-auto || npm install sequelize tedious   
//npx sequelize-auto -h localhost -d UserAccount -u sa -x 123456789@abc -p 1400  --dialect mssql -o './src/models'
//
const {MoleculerError} = require("moleculer").Errors;
const dbContext = require("../src/DBContext")();


/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "user",

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
			maxAge: 3600
		},
		routes: [{
			path: "/api",

			// Route CORS settings (overwrite global settings)
			cors: {
				origin: ["http://localhost:3000", "https://localhost:5000"],
				methods: ["GET", "OPTIONS", "POST"],
				credentials: true
			},
		}]
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
				username: {type:"string", min:3},
				password:{type:"string", min: 6},
			},
			async handler({action,params,meta, ... ctx}) {
				const {username, password} = params;
				if(!username && !password){
					throw new MoleculerError("Username and Password is incorrect");
				}
				//http://localhost:3000/api/user/sigin/signin?username=b@gmail.com&password=1111111
				const checkUser = await dbContext.UserInfo.findOne({
					where: {
						UserName: username,
						PasswordUser: password
					}
				});
				if (checkUser == null){
					return "Không có người dùng này";
				}
				else{
					return checkUser.ID;
				}
			}
		},
		register: {
			rest: {
				method: "POST",
				path: "/register",
			},
			params: {
				username: {type:"string", min:3},
				password:{type:"string", min: 6},
			},
			async handler({action,params,meta, ... ctx}) {
				const {username, password} = params;
				if(!username && !password){
					throw new MoleculerError("Username and Password is incorrect");
				}
				//http://localhost:3000/api/user/sigin/signin?username=b@gmail.com&password=1111111
				const createUser = await dbContext.UserInfo.create({
					UserName: username,
					PasswordUser: password,
				});
				return createUser;
			}
		},
		getListPropertyType: {
			rest: {
				method: "POST",
				path: "/lstPropType",
			},
			async handler() {
				const getList = await dbContext.LOAINHA.findAll();
				return getList;
			}
		},
		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};

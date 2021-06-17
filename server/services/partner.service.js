/* eslint-disable no-unused-vars */
"use strict";
//npm install --save sequelize
//npm install -g mssql
//npm install -g tedious sequelize-auto || npm install --save sequelize-auto || npm install sequelize tedious
//npx sequelize-auto -h localhost -d RENTALAPARTMENT -u sa -x 12345@abc -p 1400  --dialect mssql -o './src/models'
//
const { MoleculerError } = require("moleculer").Errors;
const dbContext = require("../src/DBContext")();
const { Op } = require("sequelize");
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
				const checkUser = await dbContext.TAIKHOAN.findOne({
					where: {
						TEN_TAIKHOAN: username,
						MATKHAU: password,
						ROLE_TAIKHOAN: "Partner",
					},
				});
				if (checkUser == null) {
					return "Username or Password not correct";
				} else {
					return checkUser.ID_TAIKHOAN;
				}
			},
		},
		contactRegistration: {
			rest: {
				method: "POST",
				path: "/registrationDetail/contactRegistration",
			},
			params: {
				idTK: { type: "string" },
				fullName: { type: "string" },
				email: { type: "string" },
				phoneNumber: { type: "string" },
				idenCode: { type: "string" },
				idenType: { type: "string" },
				country: { type: "string" },
				gender: { type: "string" },
				address: { type: "string" },
				taxCode: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const {
					idTK,
					fullName,
					email,
					phoneNumber,
					idenCode,
					idenType,
					country,
					gender,
					address,
					taxCode,
				} = params;
				//const idtk = parseInt(idTK);
				const createUser = await dbContext.THONGTINCHUHO.create({
					TEN_CHUHO: fullName,
					EMAIL: email,
					PHONE_NUMBER: phoneNumber,
					MA_GIAYTOTUYTHAN: idenCode,
					LOAI_GIAYTOTUYTHAN: idenType,
					QUOCTICH: country,
					GIOITINH: gender,
					DIACHI: address,
					MASO_THUE: taxCode,
					ID_TAIKHOAN: idTK,
				});
				return createUser.ID_TT_CHUHO;
			},
		},
		checkContactExist: {
			rest: {
				method: "POST",
				path: "/checkContactExist"
			},
			params:{
				idTk: {type: "string"}
			},
			async handler({action,params,meta, ...ctx}){
				const { idTk } = params;
				const intId = idTk;
				const checkID = await dbContext.THONGTINCHUHO.findOne({
					where:{
						ID_TAIKHOAN: intId,
					}
				});
				return checkID.ID_TT_CHUHO;
			}
		},
		showContact: {
			rest: {
				method: "POST",
				path: "/showContact",
			},
			params: {
				idTk: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idTk } = params;
				const intId = parseInt(idTk);
				const show = await dbContext.THONGTINCHUHO.findOne({
					where: {
						ID_TAIKHOAN: intId,
					},
				});
				return show;
			},
		},
		updateContact: {
			rest: {
				method: "POST",
				path: "/updateContact"
			},
			params: {
				idTT: { type: "string" },
				fullName: { type: "string" },
				email: { type: "string" },
				phoneNumber: { type: "string" },
				idenCode: { type: "string" },
				idenType: { type: "string" },
				country: { type: "string" },
				gender: { type: "string" },
				address: { type: "string" },
				taxCode: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const {
					idTT,
					fullName,
					email,
					phoneNumber,
					idenCode,
					idenType,
					country,
					gender,
					address,
					taxCode,
				} = params;
				const intId = parseInt(idTT);
				const update = await dbContext.THONGTINCHUHO.update({
					TEN_CHUHO: fullName,
					EMAIL: email,
					PHONE_NUMBER: phoneNumber,
					MA_GIAYTOTUYTHAN: idenCode,
					LOAI_GIAYTOTUYTHAN: idenType,
					QUOCTICH: country,
					GIOITINH: gender,
					DIACHI: address,
					MASO_THUE: taxCode,
				},{
					where: {
						ID_TT_CHUHO: intId
					}
				});
				return update;
			},
		},
		showListApartmentStatus1: {
			rest: {
				method: "POST",
				path: "/showListApartmentStatus1",
			},
			params: {
				idTk: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idTk } = params;
				const intId = parseInt(idTk);
				const status1 = dbContext.TAIKHOAN.findAll({
					attributes: ["ID_TAIKHOAN"],
					required: false,
					where: {
						ID_TAIKHOAN: intId,
					},
					include: [
						{
							model: dbContext.THONGTINCHUHO,
							as: "THONGTINCHUHOs",
							attributes: ["TEN_CHUHO"],
							required: false,
							include: [
								{
									model: dbContext.NHA,
									required: false,
									as: "NHAs",
									where: {
										ID_TRANGTHAI_NHA: "1",
									},
								},
							],
						},
					],
				});
				return status1;
			},
		},
		showListApartmentStatus2: {
			rest: {
				method: "POST",
				path: "/showListApartmentStatus2",
			},
			params: {
				idTk: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idTk } = params;
				const intId = parseInt(idTk);

				const showTK = await dbContext.TAIKHOAN.findAll({
					attributes: ["ID_TAIKHOAN"],
					required: false,
					where: {
						ID_TAIKHOAN: intId,
					},
					include: [
						{
							model: dbContext.THONGTINCHUHO,
							as: "THONGTINCHUHOs",
							attributes: ["TEN_CHUHO"],
							required: false,
							include: [
								{
									model: dbContext.NHA,
									as: "NHAs",
									required: false,
									where: {
										ID_TRANGTHAI_NHA: "2",
									},
								},
							],
						},
					],
				});
				return showTK;
			},
		},
		showListApartmentStatus3: {
			rest: {
				method: "POST",
				path: "/showListApartmentStatus3",
			},
			params: {
				idTk: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idTk } = params;
				const intId = parseInt(idTk);

				const showTK = await dbContext.TAIKHOAN.findAll({
					attributes: ["ID_TAIKHOAN"],
					required: false,
					where: {
						ID_TAIKHOAN: intId,
					},
					include: [
						{
							model: dbContext.THONGTINCHUHO,
							as: "THONGTINCHUHOs",
							attributes: ["TEN_CHUHO"],
							required: false,
							include: [
								{
									model: dbContext.NHA,
									as: "NHAs",
									required: false,
									where: {
										ID_TRANGTHAI_NHA: "3",
									},
								},
							],
						},
					],
				});
				return showTK;
			},
		},
		register: {
			rest: {
				method: "POST",
				path: "/register",
			},
			params: {
				username: { type: "string" },
				password: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { username, password } = params;
				const check = await dbContext.TAIKHOAN.count({
					where: {
						TEN_TAIKHOAN: {
							[Op.like]: username,
						},
						MATKHAU: password,
					},
				});
				if (check > 0) {
					return "Username exited";
				} else {
					const createAccount = await dbContext.TAIKHOAN.create({
						TEN_TAIKHOAN: username,
						MATKHAU: password,
						ROLE_TAIKHOAN: "Partner",
					});
					return createAccount.ID_TAIKHOAN;
				}
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
		getApartmentPrice: {
			rest: {
				method: "POST",
				path: "/getApartmentPrice",
			},
			params: {
				idPrice: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				let { idPrice } = params;
				const lsPrice = await dbContext.BANGGIA.findAll();
				let output = 0;
				for (let i = 0; i < lsPrice.length; i++) {
					let element = lsPrice[i];
					if (element.ID_BANGGIA == idPrice) {
						output = element;
						break;
					}
				}
				return output;
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
		getListRoomType: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListRoomType",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getType = await dbContext.LOAIPHONG.findAll();
				return getType;
			},
		},
		getListBedType: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListBedType",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getType = await dbContext.LOAIGIUONG.findAll();
				return getType;
			},
		},
		getListApartType: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListApartType",
			},
			async handler(ctx) {
				const listType = dbContext.LOAINHA.findAll();
				return listType;
			},
		},
		getTypeApart: {
			rest: {
				method: "POST",
				path: "/getTypeApart",
			},
			params: {
				id: { type: "string" },
			},
			async handler(params, ...ctx) {
				const { id } = params;
				const type = dbContext.LOAINHA.findOne({
					where: {
						ID_LOAINHA: id,
					},
				});
				return type.TEN_LOAINHA;
			},
		},
		getListCountry: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListCountry",
			},
			async handler(ctx) {
				const listCountry = dbContext.QUOCGIA.findAll();
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
						ID_QUOCGIA: countryId,
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
				idChuHo: { type: "string" },
				idLoaiNha: { type: "string" },
				tenNha: { type: "string" },
				huyPhong: { type: "string" },
				checkIn: { type: "string", format: "time" },
				checkOut: { type: "string", format: "time" },
				khoangCachTT: { type: "string" },
				soTang: { type: "string" },
				buaSang: { type: "string" },
				soNha: { type: "string" },
				tenDuong: { type: "string" },
				dienTich: { type: "string" },
				idQuan: { type: "string" },
				soNguoi: { type: "string" },
				soGiuongPhu: { type: "string" },
				gia: { type: "string" },
				khuyenMai: { type: "string" },
				trangThai: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const {
					idNha,
					idChuHo,
					idLoaiNha,
					tenNha,
					huyPhong,
					checkIn,
					checkOut,
					khoangCachTT,
					soTang,
					buaSang,
					soNha,
					tenDuong,
					dienTich,
					idQuan,
					soNguoi,
					soGiuongPhu,
					gia,
					khuyenMai,
					trangThai,
				} = params;
				const createApartment = await dbContext.NHA.create({
					ID_NHA: idNha,
					ID_TT_CHUHO: idChuHo,
					ID_LOAINHA: idLoaiNha,
					TEN_NHA: tenNha,
					FREE_CANCEL: huyPhong,
					CHECKIN: checkIn,
					CHECKOUT: checkOut,
					KHOANGCACH_TRUNGTAMTP: khoangCachTT,
					SOTANG: soTang,
					PHUPHI_BUASANG: buaSang,
					SONHA: soNha,
					TEN_DUONG: tenDuong,
					DIENTICH: dienTich,
					ID_QUAN: idQuan,
					SO_NGUOI: soNguoi,
					SO_GIUONGPHU: soGiuongPhu,
					GIA: gia,
					KHUYENMAI: khuyenMai,
					ID_TRANGTHAI_NHA: trangThai,
				});
				return createApartment;
			},
		},
		createRoom: {
			rest: {
				method: "POST",
				path: "/registrationDetail/createRoom",
			},
			params: {
				idApart: { type: "string" },
				roomName: { type: "string" },
				idStyleRoom: { type: "string" },
				idStyleBed: { type: "string" },
				numberBed: { type: "string" },
				maxPer: { type: "string" },
				maxExtraBed: { type: "string" },
				priceExtra: { type: "string" },
				width: { type: "string" },
				height: { type: "string" },
				numberRooms: { type: "string" },
				descript: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const {
					idApart,
					roomName,
					idStyleRoom,
					idStyleBed,
					numberBed,
					maxPer,
					maxExtraBed,
					priceExtra,
					width,
					height,
					numberRooms,
					descript,
				} = params;

				const create = await dbContext.PHONG.create({
					ID_NHA: idApart,
					TEN_PHONG: roomName,
					ID_LOAIPHONG: idStyleRoom,
					ID_LOAIGIUONG: idStyleBed,
					SOGIUONG: numberBed,
					SONGUOITOIDA: maxPer,
					SOGIUONG_PHU: maxExtraBed,
					GIAGIUONG_PHU: priceExtra,
					CHIEUDAI_PHONG: width,
					CHIEURONG_PHONG: height,
					SOLUONG: numberRooms,
					MOTA: descript,
				});
				return create;
			},
		},
		getAddressApartment: {
			rest: {
				method: "POST",
				path: "/getAddressApartment",
			},
			params: {
				id: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { id } = params;
				const myApart = await dbContext.NHA.findOne({
					where: {
						ID_NHA: id,
					},
				});
				const myDistrict = await dbContext.QUAN.findOne({
					where: {
						ID_QUAN: myApart.ID_QUAN,
					},
				});
				const myCity = await dbContext.THANHPHO.findOne({
					where: {
						ID_THANHPHO: myDistrict.ID_THANHPHO,
					},
				});
				const myCountry = await dbContext.QUOCGIA.findOne({
					where: {
						ID_QUOCGIA: myCity.ID_QUOCGIA,
					},
				});
				const output =
					myApart.SONHA +
					" " +
					myApart.TEN_DUONG +
					" " +
					myDistrict.TEN_QUAN +
					" " +
					myCity.TEN_THANHPHO +
					" " +
					myCountry.TEN_QUOCGIA;
				return output;
			},
		},
		getListOrderNew: {
			rest: {
				method: "POST",
				path: "/getListOrderNew",
			},
			params: {
				idTk: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idTk } = params;
				const intId = parseInt(idTk);
				const getIDAccount = await dbContext.TAIKHOAN.findOne({
					where:
						{ ID_TAIKHOAN: intId },
				});
				const getIDPartner = await dbContext.THONGTINCHUHO.findAll({
					attributes: ["ID_TT_CHUHO"],
					where: {
						ID_TAIKHOAN: getIDAccount.ID_TAIKHOAN,
					},
					include:[{
						model: dbContext.NHA,
						as: "NHAs",
						attributes: ["THUTU_NHA"],
						required: false,
						include:[{
							model: dbContext.DATCANHO,
							as: "DATCANHOs",
							required: false,
							where: {
								ID_TT_DCH: "1"
							}
						}]
					}]
				});				
				return getIDPartner;
			},
		},
		getListOrderAction: {
			rest: {
				method: "POST",
				path: "/getListOrderAction",
			},
			params: {
				idTk: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idTk } = params;
				const intId = parseInt(idTk);
				const getIDAccount = await dbContext.TAIKHOAN.findOne({
					where:
						{ ID_TAIKHOAN: intId },
				});
				const getIDPartner = await dbContext.THONGTINCHUHO.findAll({
					attributes: ["ID_TT_CHUHO"],
					where: {
						ID_TAIKHOAN: getIDAccount.ID_TAIKHOAN,
					},
					include:[{
						model: dbContext.NHA,
						as: "NHAs",
						attributes: ["THUTU_NHA"],
						required: false,
						include:[{
							model: dbContext.DATCANHO,
							as: "DATCANHOs",
							required: false,
							where: {
								ID_TT_DCH: "2"
							}
						}]
					}]
				});				
				return getIDPartner;
			},
		},
		getListOrderFinished: {
			rest: {
				method: "POST",
				path: "/getListOrderFinished",
			},
			params: {
				idTk: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idTk } = params;
				const intId = parseInt(idTk);
				const getIDAccount = await dbContext.TAIKHOAN.findOne({
					where:
						{ ID_TAIKHOAN: intId },
				});
				const getIDPartner = await dbContext.THONGTINCHUHO.findAll({
					attributes: ["ID_TT_CHUHO"],
					where: {
						ID_TAIKHOAN: getIDAccount.ID_TAIKHOAN,
					},
					include:[{
						model: dbContext.NHA,
						as: "NHAs",
						attributes: ["THUTU_NHA"],
						required: false,
						include:[{
							model: dbContext.DATCANHO,
							as: "DATCANHOs",
							required: false,
							where: {
								ID_TT_DCH: "3"
							}
						}]
					}]
				});				
				return getIDPartner;
			},
		},
		getListOrderCancelled: {
			rest: {
				method: "POST",
				path: "/getListOrderFinished",
			},
			params: {
				idTk: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idTk } = params;
				const intId = parseInt(idTk);
				const getIDAccount = await dbContext.TAIKHOAN.findOne({
					where:
						{ ID_TAIKHOAN: intId },
				});
				const getIDPartner = await dbContext.THONGTINCHUHO.findAll({
					attributes: ["ID_TT_CHUHO"],
					where: {
						ID_TAIKHOAN: getIDAccount.ID_TAIKHOAN,
					},
					include:[{
						model: dbContext.NHA,
						as: "NHAs",
						attributes: ["THUTU_NHA"],
						required: false,
						include:[{
							model: dbContext.DATCANHO,
							as: "DATCANHOs",
							required: false,
							where: {
								ID_TT_DCH: "4"
							}
						}]
					}]
				});				
				return getIDPartner;
			},
		},
		changeActive: {
			rest: {
				method: "POST",
				path: "/changeActive",
			},
			params: {
				idNha: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idNha } = params;
				const getApat = await dbContext.NHA.findOne({
					where: {
						ID_NHA: idNha,
					},
				});
				getApat.ID_TRANGTHAI_NHA = "2";
				const change = await getApat.save({
					fields: ["ID_TRANGTHAI_NHA"],
				});
				return change;
			},
		},
		changeStatusAction: {
			rest: {
				method: "POST",
				path: "/changeStatusAction",
			},
			params: {
				idOrder: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idOrder } = params;
				const getStatus = await dbContext.DATCANHO.findOne({
					where: {
						ID_DATCANHO: idOrder,
					},
				});
				getStatus.ID_TT_DCH = "2";
				const change = await getStatus.save({
					fields: ["ID_TT_DCH"],
				});
				return change;
			},
		},
		changeStatusFinished: {
			rest: {
				method: "POST",
				path: "/changeStatusFinished",
			},
			params: {
				idOrder: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idOrder } = params;
				const getStatus = await dbContext.DATCANHO.findOne({
					where: {
						ID_DATCANHO: idOrder,
					},
				});
				getStatus.ID_TT_DCH = "3";
				const change = await getStatus.save({
					fields: ["ID_TT_DCH"],
				});
				return change;
			},
		},
		changeStatusCancelled: {
			rest: {
				method: "POST",
				path: "/changeStatusCancelled",
			},
			params: {
				idOrder: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idOrder } = params;
				const getStatus = await dbContext.DATCANHO.findOne({
					where: {
						ID_DATCANHO: idOrder,
					},
				});
				getStatus.ID_TT_DCH = "4";
				const change = await getStatus.save({
					fields: ["ID_TT_DCH"],
				});
				return change;
			},
		},
		changeUnactive: {
			rest: {
				method: "POST",
				path: "/changeUnactive",
			},
			params: {
				idNha: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idNha } = params;
				const getApat = await dbContext.NHA.findOne({
					where: {
						ID_NHA: idNha,
					},
				});
				getApat.ID_TRANGTHAI_NHA = "1";
				const change = await getApat.save({
					fields: ["ID_TRANGTHAI_NHA"],
				});

				return change;
			},
		},
		changeHired: {
			rest: {
				method: "POST",
				path: "/changeHired",
			},
			params: {
				idNha: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { idNha } = params;
				const getApat = await dbContext.NHA.findOne({
					where: {
						ID_NHA: idNha,
					},
				});
				getApat.ID_TRANGTHAI_NHA = "3";
				const change = await getApat.save({
					fields: ["ID_TRANGTHAI_NHA"],
				});

				return change;
			},
		},
		getDetailOrder:{
			rest:{
				method: "POST",
				path: "/getDetailOrder"
			},
			params: {
				idOrder: {type: "string"}
			},
			async handler({action, params, meta, ...ctx}){
				const { idOrder } = params;
				const intId = idOrder;

				const cusinfo = await dbContext.DATCANHO.findOne({
					where: {
						ID_DATCANHO: intId,
					},
					include:["ID_TT_KHACHHANG_THONGTINKHACHHANG"]
				});
				return cusinfo;
			}
		},
		checkOrderCancel: {
			rest: {
				method: "POST",
				path: "/checkOrderCancel"
			},
			params: {
				idOrder: {type: "string"}
			},
			async handler({action,params,meta, ...ctx}){
				const { idOrder } = params;
				const getOrder = await dbContext.DATCANHO.findOne({
					where: {
						ID_DATCANHO: idOrder,
					}
				});
				const checkCancel = await dbContext.NHA.findOne({
					where: {
						ID_NHA: getOrder.ID_NHA,
					},
				});
				return checkCancel.FREE_CANCEL;
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

let DataTypes = require("sequelize").DataTypes;
let _BANGGIA = require("./BANGGIA");
let _CHITIETCSVC = require("./CHITIETCSVC");
let _CHITIETNOITHAT = require("./CHITIETNOITHAT");
let _CSVC = require("./CSVC");
let _CSVCNHA = require("./CSVCNHA");
let _DANHGIA = require("./DANHGIA");
let _DATCANHO = require("./DATCANHO");
let _HINHANH = require("./HINHANH");
let _LOAIGIUONG = require("./LOAIGIUONG");
let _LOAINHA = require("./LOAINHA");
let _LOAIPHONG = require("./LOAIPHONG");
let _NHA = require("./NHA");
let _NOITHAT = require("./NOITHAT");
let _NOITHATPHONG = require("./NOITHATPHONG");
let _PHONG = require("./PHONG");
let _QUAN = require("./QUAN");
let _QUOCGIA = require("./QUOCGIA");
let _STYLE = require("./STYLE");
let _STYLENHA = require("./STYLENHA");
let _TAIKHOAN = require("./TAIKHOAN");
let _THANHPHO = require("./THANHPHO");
let _THONGTINCHUHO = require("./THONGTINCHUHO");
let _THONGTINKHACHHANG = require("./THONGTINKHACHHANG");
let _TRANGTHAIDATCANHO = require("./TRANGTHAIDATCANHO");
let _TRANGTHAINHA = require("./TRANGTHAINHA");

function initModels(sequelize) {
	let BANGGIA = _BANGGIA(sequelize, DataTypes);
	let CHITIETCSVC = _CHITIETCSVC(sequelize, DataTypes);
	let CHITIETNOITHAT = _CHITIETNOITHAT(sequelize, DataTypes);
	let CSVC = _CSVC(sequelize, DataTypes);
	let CSVCNHA = _CSVCNHA(sequelize, DataTypes);
	let DANHGIA = _DANHGIA(sequelize, DataTypes);
	let DATCANHO = _DATCANHO(sequelize, DataTypes);
	let HINHANH = _HINHANH(sequelize, DataTypes);
	let LOAIGIUONG = _LOAIGIUONG(sequelize, DataTypes);
	let LOAINHA = _LOAINHA(sequelize, DataTypes);
	let LOAIPHONG = _LOAIPHONG(sequelize, DataTypes);
	let NHA = _NHA(sequelize, DataTypes);
	let NOITHAT = _NOITHAT(sequelize, DataTypes);
	let NOITHATPHONG = _NOITHATPHONG(sequelize, DataTypes);
	let PHONG = _PHONG(sequelize, DataTypes);
	let QUAN = _QUAN(sequelize, DataTypes);
	let QUOCGIA = _QUOCGIA(sequelize, DataTypes);
	let STYLE = _STYLE(sequelize, DataTypes);
	let STYLENHA = _STYLENHA(sequelize, DataTypes);
	let TAIKHOAN = _TAIKHOAN(sequelize, DataTypes);
	let THANHPHO = _THANHPHO(sequelize, DataTypes);
	let THONGTINCHUHO = _THONGTINCHUHO(sequelize, DataTypes);
	let THONGTINKHACHHANG = _THONGTINKHACHHANG(sequelize, DataTypes);
	let TRANGTHAIDATCANHO = _TRANGTHAIDATCANHO(sequelize, DataTypes);
	let TRANGTHAINHA = _TRANGTHAINHA(sequelize, DataTypes);

	NHA.belongsTo(BANGGIA, { as: "ID_BANGGIA_BANGGIum", foreignKey: "ID_BANGGIA"});
	BANGGIA.hasMany(NHA, { as: "NHAs", foreignKey: "ID_BANGGIA"});
	CSVCNHA.belongsTo(CHITIETCSVC, { as: "ID_CT_CSVC_CHITIETCSVC", foreignKey: "ID_CT_CSVC"});
	CHITIETCSVC.hasMany(CSVCNHA, { as: "CSVCNHAs", foreignKey: "ID_CT_CSVC"});
	NOITHATPHONG.belongsTo(CHITIETNOITHAT, { as: "ID_CT_NOITHAT_CHITIETNOITHAT", foreignKey: "ID_CT_NOITHAT"});
	CHITIETNOITHAT.hasMany(NOITHATPHONG, { as: "NOITHATPHONGs", foreignKey: "ID_CT_NOITHAT"});
	
	PHONG.belongsTo(LOAIGIUONG, { as: "ID_LOAIGIUONG_LOAIGIUONG", foreignKey: "ID_LOAIGIUONG"});
	LOAIGIUONG.hasMany(PHONG, { as: "PHONGs", foreignKey: "ID_LOAIGIUONG"});
	NHA.belongsTo(LOAINHA, { as: "ID_LOAINHA_LOAINHA", foreignKey: "ID_LOAINHA"});
	LOAINHA.hasMany(NHA, { as: "NHAs", foreignKey: "ID_LOAINHA"});
	PHONG.belongsTo(LOAIPHONG, { as: "ID_LOAIPHONG_LOAIPHONG", foreignKey: "ID_LOAIPHONG"});
	LOAIPHONG.hasMany(PHONG, { as: "PHONGs", foreignKey: "ID_LOAIPHONG"});
	DANHGIA.belongsTo(NHA, { as: "THUTU_NHA_NHA", foreignKey: "THUTU_NHA"});
	NHA.hasMany(DANHGIA, { as: "DANHGIa", foreignKey: "THUTU_NHA"});
	DATCANHO.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
	NHA.hasMany(DATCANHO, { as: "DATCANHOs", foreignKey: "ID_NHA"});
	PHONG.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
	NHA.hasMany(PHONG, { as: "PHONGs", foreignKey: "ID_NHA"});
	STYLENHA.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
	NHA.hasMany(STYLENHA, { as: "STYLENHAs", foreignKey: "ID_NHA"});

	CHITIETCSVC.belongsTo(CSVC, { as: "CSVC", foreignKey: "ID_CSVC"});
	CSVC.hasMany(CHITIETCSVC, { as: "CHITIETCSVC", foreignKey: "ID_CSVC"});

	CHITIETNOITHAT.belongsTo(NOITHAT, { as: "ID_NOITHAT_NOITHAT", foreignKey: "ID_NOITHAT"});
	NOITHAT.hasMany(CHITIETNOITHAT, { as: "CTNT", foreignKey: "ID_NOITHAT"});
  
	NHA.belongsTo(THONGTINCHUHO, { as: "ID_TT_CHUHO_THONGTINCHUHO", foreignKey: "ID_TT_CHUHO"});
	THONGTINCHUHO.hasMany(NHA, { as: "NHAs", foreignKey: "ID_TT_CHUHO"});

	THONGTINCHUHO.belongsTo(TAIKHOAN, { as: "ID_TAIKHOAN_TAIKHOAN", foreignKey: "ID_TAIKHOAN"});
	TAIKHOAN.hasMany(THONGTINCHUHO, { as: "THONGTINCHUHOs", foreignKey: "ID_TAIKHOAN"});

	HINHANH.belongsTo(PHONG, { as: "ID_PHONG_PHONG", foreignKey: "ID_PHONG"});
	PHONG.hasMany(HINHANH, { as: "HINHANHs", foreignKey: "ID_PHONG"});
	NOITHATPHONG.belongsTo(PHONG, { as: "ID_PHONG_PHONG", foreignKey: "ID_PHONG"});
	PHONG.hasMany(NOITHATPHONG, { as: "NOITHATPHONGs", foreignKey: "ID_PHONG"});
	NHA.belongsTo(QUAN, { as: "ID_QUAN_QUAN", foreignKey: "ID_QUAN"});
	QUAN.hasMany(NHA, { as: "NHAs", foreignKey: "ID_QUAN"});
	THANHPHO.belongsTo(QUOCGIA, { as: "ID_QUOCGIA_QUOCGIum", foreignKey: "ID_QUOCGIA"});
	QUOCGIA.hasMany(THANHPHO, { as: "THANHPHOs", foreignKey: "ID_QUOCGIA"});
	STYLENHA.belongsTo(STYLE, { as: "ID_STYLE_STYLE", foreignKey: "ID_STYLE"});
	STYLE.hasMany(STYLENHA, { as: "STYLENHAs", foreignKey: "ID_STYLE"});
	DANHGIA.belongsTo(TAIKHOAN, { as: "ID_TAIKHOAN_TAIKHOAN", foreignKey: "ID_TAIKHOAN"});
	TAIKHOAN.hasMany(DANHGIA, { as: "DANHGIa", foreignKey: "ID_TAIKHOAN"});
	
	THONGTINKHACHHANG.belongsTo(TAIKHOAN, { as: "ID_TAIKHOAN_TAIKHOAN", foreignKey: "ID_TAIKHOAN"});
	TAIKHOAN.hasMany(THONGTINKHACHHANG, { as: "THONGTINKHACHHANGs", foreignKey: "ID_TAIKHOAN"});
	QUAN.belongsTo(THANHPHO, { as: "ID_THANHPHO_THANHPHO", foreignKey: "ID_THANHPHO"});
	THANHPHO.hasMany(QUAN, { as: "QUANs", foreignKey: "ID_THANHPHO"});
	
	DATCANHO.belongsTo(THONGTINKHACHHANG, { as: "ID_TT_KHACHHANG_THONGTINKHACHHANG", foreignKey: "ID_TT_KHACHHANG"});
	THONGTINKHACHHANG.hasMany(DATCANHO, { as: "DATCANHOs", foreignKey: "ID_TT_KHACHHANG"});
	DATCANHO.belongsTo(TRANGTHAIDATCANHO, { as: "ID_TT_DCH_TRANGTHAIDATCANHO", foreignKey: "ID_TT_DCH"});
	TRANGTHAIDATCANHO.hasMany(DATCANHO, { as: "DATCANHOs", foreignKey: "ID_TT_DCH"});
	NHA.belongsTo(TRANGTHAINHA, { as: "ID_TRANGTHAI_NHA_TRANGTHAINHA", foreignKey: "ID_TRANGTHAI_NHA"});
	TRANGTHAINHA.hasMany(NHA, { as: "NHAs", foreignKey: "ID_TRANGTHAI_NHA"});

	return {
		BANGGIA,
		CHITIETCSVC,
		CHITIETNOITHAT,
		CSVC,
		CSVCNHA,
		DANHGIA,
		DATCANHO,
		HINHANH,
		LOAIGIUONG,
		LOAINHA,
		LOAIPHONG,
		NHA,
		NOITHAT,
		NOITHATPHONG,
		PHONG,
		QUAN,
		QUOCGIA,
		STYLE,
		STYLENHA,
		TAIKHOAN,
		THANHPHO,
		THONGTINCHUHO,
		THONGTINKHACHHANG,
		TRANGTHAIDATCANHO,
		TRANGTHAINHA,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

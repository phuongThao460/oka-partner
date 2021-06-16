/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from "axios";
import Navbar from "../paner-form/Navbar";
class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idOrder: document.location.pathname.substring(13),
      lstOrder: {},
      lstCustom: {},
    };
    this.getDetailOrder(this.state.idOrder);
  }
  getDetailOrder = (idCustomer) => {
    axios
      .post("http://localhost:33456/api/partner/getDetailOrder", {
        idOrder: idCustomer.toString(),
      })
      .then((result) => {
        console.log(result.data);
        console.log(result.data.ID_TT_KHACHHANG_THONGTINKHACHHANG);
        this.state.lstOrder = result.data;
        this.state.lstCustom = result.data.ID_TT_KHACHHANG_THONGTINKHACHHANG;
        this.setState(this);
      })
      .catch((err) => console.log(err.result));
  };
  changeHired = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/changeHired", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.props.history.push("/lstApartment/");
      })
      .catch((err) => console.log(err.result));
  };

  render() {
    const { lstOrder, lstCustom } = this.state;
    return (
      <>
        <Navbar />
        <h2>THONG TIN DON DAT HANG</h2>
        <p> ma dat can ho: {lstOrder.ID_DATCANHO}</p>
        <p>Ma nha dat: {lstOrder.ID_NHA}</p>
        <p>Ngay dat: {lstOrder.NGAYDAT}</p>
        <p>checkin: {lstOrder.CHECKIN}</p>
        <p>checkout: {lstOrder.CHECKOUT}</p>
        <p>ngay den: {lstOrder.NGAY_DEN}</p>
        <p>ngay di: {lstOrder.NGAY_DI}</p>
        <p>tong tien phong: {lstOrder.TONGTIEN_PHONG}</p>
        <p>bua sang: {lstOrder.BUASANG}</p>
        <p>tong tien bua sang: {lstOrder.TONGTIEN_BUASANG}</p>
        <p>so giuong phu: {lstOrder.SO_GIUONGPHU}</p>
        <p>tong tien giuong phu: {lstOrder.TONGTIEN_GIUONGPHU}</p>
        <p>thue GTGT: {lstOrder.PHI_GTGT}</p>
        <p>tong tien: {lstOrder.TONGTIEN}</p>
        <p>ghi chu: {lstOrder.GHICHU}</p>
        <p>tinh trang dat can ho: {lstOrder.ID_TT_DCH}</p>
        <h2>THONG TIN KHACH HANG</h2>
        <p>Ten khach hang: {lstCustom.TEN_KHACHHANG}</p>
        <p>Email: {lstCustom.EMAIL}</p>
        <p>so dien thoai: {lstCustom.PHONE_NUMBER}</p>
        <p>ma giay to tuy than: {lstCustom.MA_GIAYTOTUYTHAN}</p>
        <p>loai giay to tuy than: {lstCustom.LOAI_GIAYTOTUYTHAN}</p>
        <p>quoc tich: {lstCustom.QUOCTICH}</p>
        <p>gioi tinh: {lstCustom.GIOITINH ? "Nũ" : "Nam"}</p>
        <button onClick={() => this.changeHired(lstOrder.ID_NHA)}>
          Submit
        </button>
      </>
    );
  }
}
export default OrderDetail;

/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from "axios";
import Navbar from "../paner-form/Navbar";
import { Link } from "react-router-dom";
class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idOrder: document.location.pathname.substring(13),
      lstOrder: {},
      lstCustom: {},
      freeCancel: "",
    };
    this.getDetailOrder(this.state.idOrder);
    this.checkOrderCancel(this.state.idOrder);
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
  changeHiredAction = (idNha, idOrder) => {
    axios
      .post("http://localhost:33456/api/partner/changeHired", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
      })
      .catch((err) => console.log(err.result));
    axios
      .post("http://localhost:33456/api/partner/changeStatusAction", {
        idOrder: idOrder.toString(),
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err.result));
  };
  changeCancelledActive = (idNha,idOrder) => {
    axios
      .post("http://localhost:33456/api/partner/changeStatusCancelled", {
        idOrder: idOrder.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
      })
      .catch((err) => console.log(err.result));
      axios
      .post("http://localhost:33456/api/partner/changeActive", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        window.location.reload();
      })
      .catch((err) => console.log(err.result));
  };
  changeActiveFinished = (idNha,idOrder) => {
    axios
      .post("http://localhost:33456/api/partner/changeActive", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
      })
      .catch((err) => console.log(err.result));
    axios
      .post("http://localhost:33456/api/partner/changeStatusFinished", {
        idOrder: idOrder.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
      })
      .catch((err) => console.log(err.result));
  };
  checkOrderCancel = (idOrder) => {
    axios
      .post("http://localhost:33456/api/partner/checkOrderCancel", {
        idOrder: idOrder.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.state.freeCancel = result.data;
        this.setState(this);
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
        <p>gioi tinh: {lstCustom.GIOITINH ? "Nữ" : "Nam"}</p>
        {this.state.freeCancel ? (
          lstOrder.ID_TT_DCH === 1 ? (
            <>
              <button
                className="btn btn-success"
                onClick={() =>
                  this.changeHiredAction(lstOrder.ID_NHA, lstOrder.ID_DATCANHO)
                }
              >
                Action
              </button>
              <button
                button
                className="btn btn-danger"
                onClick={() => this.changeCancelledActive(lstOrder.ID_NHA,lstOrder.ID_DATCANHO)}
              >
                Cancel
              </button>
              <Link to={"/lstOrder/" + localStorage.getItem("idTk")}>
                Back to list
              </Link>
            </>
          ) : lstOrder.ID_TT_DCH === 2 ? (
            <>
              <button
                className="btn btn-success"
                onClick={() => this.changeActiveFinished(lstOrder.ID_NHA,lstOrder.ID_DATCANHO)}
              >
                Finished
              </button>
              <button
                className="btn btn-danger"
                onClick={() => this.changeCancelledActive(lstOrder.ID_NHA,lstOrder.ID_DATCANHO)}
              >
                Cancel
              </button>
              <Link to={"/lstOrder/" + localStorage.getItem("idTk")}>
                Back to list
              </Link>
            </>
          ) : (
            <Link to={"/lstOrder/" + localStorage.getItem("idTk")}>
              Back to list
            </Link>
          )
        ) : lstOrder.ID_TT_DCH === 1 ? (
          <>
            <button
              className="btn btn-success"
              onClick={() =>
                this.changeHiredAction(lstOrder.ID_NHA, lstOrder.ID_DATCANHO)
              }
            >
              Action
            </button>
            <Link to={"/lstOrder/" + localStorage.getItem("idTk")}>
              Back to list
            </Link>
          </>
        ) : lstOrder.ID_TT_DCH === 2 ? (
          <>
            <button
              className="btn btn-success"
              onClick={() => this.changeActiveFinished(lstOrder.ID_NHA,lstOrder.ID_DATCANHO)}
            >
              Finished
            </button>
            <Link to={"/lstOrder/" + localStorage.getItem("idTk")}>
              Back to list
            </Link>
          </>
        ) : (
          <Link to={"/lstOrder/" + localStorage.getItem("idTk")}>
            Back to list
          </Link>
        )}
      </>
    );
  }
}
export default OrderDetail;

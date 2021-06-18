/* eslint-disable no-sequences */
/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React from "react";
import Navbar from "../paner-form/Navbar";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;
class ListApartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTT: 0,
      idApart: 0,
      idOrder: 0,
      lstApartmentS1: [],
      lstApartmentS2: [],
      lstApartmentS3: [],
      size: "small",
    };
    this.showApartmentStatus1();
    this.showApartmentStatus2();
    this.showApartmentStatus3();
  }
  onChange = (e) => {
    this.setState({ size: e.target.value });
  };
  showApartmentStatus1 = () => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus1", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TAIKHOAN);
        this.state.lstApartmentS1 = result.data[0].THONGTINCHUHOs[0].NHAs;
        this.setState(this);
      });
  };
  showApartmentStatus2 = () => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus2", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TAIKHOAN);
        this.state.lstApartmentS2 = result.data[0].THONGTINCHUHOs[0].NHAs;
        this.setState(this);
      });
  };
  showApartmentStatus3 = () => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus3", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TAIKHOAN);
        this.state.lstApartmentS3 = result.data[0].THONGTINCHUHOs[0].NHAs;
        this.setState(this);
      });
  };
  getOrder = () => {
    this.setState(this);
    this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
  }
  changeActive = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/changeActive", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err.result));
  };
  changeUnactive = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/changeUnactive", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err.result));
  };
  deleteApartment = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/deleteApartment", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err.result));
  }
  render() {
    const { size } = this.state;
    return (
      <>
        <Navbar />
        <button onClick={() => this.getOrder()}>Order</button>
        <Tabs
          defaultActiveKey="1"
          type="card"
          size={size}
          style={{
            justifyContent: "center",
            paddingLeft: "185px",
            paddingTop: "20px",
          }}
        >
          <TabPane tab="Unactive" key="1">
            <div key={this.state.idTk}>
              {this.state.lstApartmentS1.map((item) => (
                <div key={item.ID_TAIKHOAN}>
                  <div value={item.ID_TT_CHUHO}>
                    <div value={item.THUTU_NHA}>
                      <p>ma nha: {item.ID_NHA}</p>
                      <p>loai nha: {item.ID_LOAINHA}</p>
                      <p>ten nha: {item.TEN_NHA}</p>
                      <button onClick={() => this.changeActive(item.ID_NHA)}>
                        Active
                      </button>
                      <button onClick={() => this.deleteApartment(item.ID_NHA)}>
                        Delete
                      </button>
                      <p>------------------------------------------------</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tab="Active" key="2">
            <div key={this.state.idTk}>
              {this.state.lstApartmentS2.map((item) => (
                <div key={item.ID_TAIKHOAN}>
                  <div value={item.ID_TT_CHUHO}>
                    <div value={item.THUTU_NHA}>
                      <p>ma nha: {item.ID_NHA}</p>
                      <p>loai nha: {item.ID_LOAINHA}</p>
                      <p>ten nha: {item.TEN_NHA}</p>
                      <button onClick={() => this.changeUnactive(item.ID_NHA)}>
                        Unactive
                      </button>
                      <p>------------------------------------------------</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tab="Hired" key="3">
            <div key={this.state.idTk}>
              {this.state.lstApartmentS3.map((item) => (
                <div key={item.ID_TAIKHOAN}>
                  <div value={item.ID_TT_CHUHO}>
                    <div value={item.THUTU_NHA}>
                      <p>ma nha: {item.ID_NHA}</p>
                      <p>loai nha: {item.ID_LOAINHA}</p>
                      <p>ten nha: {item.TEN_NHA}</p>
                      <p>------------------------------------------------</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default ListApartment;

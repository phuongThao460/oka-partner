/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Navbar from "../paner-form/Navbar";
import { Tabs } from "antd";
const { TabPane } = Tabs;
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idOrder: 0,
      lstOrderNew: [],
      lstOrderAction: [],
      lstOrderFinished: [],
      lstOrderCancelled: [],
      size: "small",
    };
    this.getListOrderNew();
    this.getListOrderAction();
    this.getListOrderFinished();
    this.getListOrderCancelled();
  }
  getListOrderNew = () => {
    axios
      .post("http://localhost:33456/api/partner/getListOrderNew", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TT_CHUHO);
        this.state.lstOrderNew = result.data[0].NHAs;
        this.setState(this);
      })
      .catch((err) => console.log(err));
  };
  getListOrderAction = () => {
    axios
      .post("http://localhost:33456/api/partner/getListOrderAction", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TT_CHUHO);
        //console.log(result.data[0].NHAs[0].DATCANHOs[0].ID_TT_KHACHHANG);
        this.state.lstOrderAction = result.data[0].NHAs;
        this.setState(this);
        
      })
      .catch((err) => console.log(err));
  };
  getListOrderFinished = () => {
    axios
      .post("http://localhost:33456/api/partner/getListOrderFinished", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TT_CHUHO);
        this.state.lstOrderFinished = result.data[0].NHAs;
        this.setState(this);
      })
      .catch((err) => console.log(err));
  };
  getListOrderCancelled = () => {
    axios
      .post("http://localhost:33456/api/partner/getListOrderCancelled", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TT_CHUHO);
        this.state.lstOrderCancelled = result.data[0].NHAs;
        this.setState(this);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { lstOrderNew, size, lstOrderAction, lstOrderFinished,lstOrderCancelled } = this.state;
    return (
      <>
        <Navbar/>
        <Link to={"/lstApartment/" + localStorage.getItem("idTk")} className="back-list">Back to apartment's list</Link>
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
          <TabPane tab="New" key="1">
          {lstOrderNew.map((item) => (
          <div key={item.ID_TT_CHUHO}>
            <div value={item.THUTU_NHA}>
              {item["DATCANHOs"].map((index) => (
                <div key={index.ID_DATCANHO}>
                  <Link to={"/orderDetail/" + index.ID_DATCANHO}>ID_DATCANHO: {index.ID_DATCANHO}</Link>
                  <p>ID_TT_KHACHHANG: {index.ID_TT_KHACHHANG}</p>
                  <p>ID_NHA: {index.ID_NHA}</p>
                  <p>NGAYDAT: {index.NGAYDAT}</p>
                  <p>------------------------------------------------</p>
                </div>
              ))}
            </div>
          </div>
        ))}
          </TabPane>
          <TabPane tab="Action" key="2">
          {lstOrderAction.map((item) => (
          <div key={item.ID_TT_CHUHO}>
            <div value={item.THUTU_NHA}>
              {item["DATCANHOs"].map((index) => (
                <div key={index.ID_DATCANHO}>
                  <Link to={"/orderDetail/" + index.ID_DATCANHO}>ID_DATCANHO: {index.ID_DATCANHO}</Link>
                  <p>ID_TT_KHACHHANG: {index.ID_TT_KHACHHANG}</p>
                  <p>ID_NHA: {index.ID_NHA}</p>
                  <p>NGAYDAT: {index.NGAYDAT}</p>
                  <p>------------------------------------------------</p>
                </div>
              ))}
            </div>
          </div>
        ))}
          </TabPane>
          <TabPane tab="Finished" key="3">
          {lstOrderFinished.map((item) => (
          <div key={item.ID_TT_CHUHO}>
            <div value={item.THUTU_NHA}>
              {item["DATCANHOs"].map((index) => (
                <div key={index.ID_DATCANHO}>
                  <Link to={"/orderDetail/" + index.ID_DATCANHO}>ID_DATCANHO: {index.ID_DATCANHO}</Link>
                  <p>ID_TT_KHACHHANG: {index.ID_TT_KHACHHANG}</p>
                  <p>ID_NHA: {index.ID_NHA}</p>
                  <p>NGAYDAT: {index.NGAYDAT}</p>
                  <p>------------------------------------------------</p>
                </div>
              ))}
            </div>
          </div>
        ))}
          </TabPane>
          <TabPane tab="Cancelled" key="4">
          {lstOrderCancelled.map((item) => (
          <div key={item.ID_TT_CHUHO}>
            <div value={item.THUTU_NHA}>
              {item["DATCANHOs"].map((index) => (
                <div key={index.ID_DATCANHO}>
                  <Link to={"/orderDetail/" + index.ID_DATCANHO}>ID_DATCANHO: {index.ID_DATCANHO}</Link>
                  <p>ID_TT_KHACHHANG: {index.ID_TT_KHACHHANG}</p>
                  <p>ID_NHA: {index.ID_NHA}</p>
                  <p>NGAYDAT: {index.NGAYDAT}</p>
                  <p>------------------------------------------------</p>
                </div>
              ))}
            </div>
          </div>
        ))}
          </TabPane>
        </Tabs>
        
      </>
    );
  }
}

export default Order;

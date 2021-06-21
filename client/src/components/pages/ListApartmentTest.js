/* eslint-disable no-sequences */
/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React from "react";
import Navbar from "../paner-form/Navbar";
import "../../RegistrationDetail.css";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;
class ListApartmentTest extends React.Component {
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
        console.log(result.data[0]);
        this.state.lstApartmentS1 = result.data[0].NHAs;
        this.setState(this);
      });
  };
  showApartmentStatus2 = () => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus2", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].NHAs);
        this.state.lstApartmentS2 = result.data[0].NHAs;
        this.setState(this);
      });
  };
  showApartmentStatus3 = () => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus3", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data);
        this.state.lstApartmentS3 = result.data[0].NHAs;
        this.setState(this);
      });
  };
  getOrder = () => {
    this.setState(this);
    this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
  };
  changeActive = (idNha) => {
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
  changeUnactive = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/changeUnactive", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        window.location.reload();
      })
      .catch((err) => console.log(err.result));
  };
  deleteApartment = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/deleteRoom", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        //window.location.reload();
      })
      .catch((err) => alert(err.result));
    axios
      .post("http://localhost:33456/api/partner/deleteApartment", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        window.location.reload();
      })
      .catch((err) => {
          if(err.response.status === 500){
            alert("Cannot delete apartment ");
          }
          console.log(err.response.status)
      });
  };
  render() {
    const { size } = this.state;
    return (
      <>
        <Navbar />
        <div
          style={{ float: "right", paddingRight: "200px", paddingTop: "20px" }}
        >
          <button onClick={() => this.getOrder()} className="btn-order">
            View Orders List
          </button>
        </div>
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
          <TabPane tab="Unactive" key="1" className="tab-apart">
            <div>
              {this.state.lstApartmentS1.map((item) => (
                <div>
                  <div key={item.ID_TT_CHUHO}>
                    <div value={item.THUTU_NHA}>
                      <p>ma nha: {item.ID_NHA}</p>
                      <p>loai nha: {item.ID_LOAINHA_LOAINHA.TEN_LOAINHA}</p>
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
            <div>
              {this.state.lstApartmentS2.map((item) => (
                <div>
                  <div key={item.ID_TT_CHUHO}>
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
            <div>
              {this.state.lstApartmentS3.map((item) => (
                <div>
                  <div key={item.ID_TT_CHUHO}>
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

export default ListApartmentTest;

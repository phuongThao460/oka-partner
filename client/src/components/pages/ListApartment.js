/* eslint-disable no-sequences */
/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React from "react";
import Navbar from "../paner-form/Navbar";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const bodyFormData = new FormData();
class ListApartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTk: document.location.pathname.substring(14),
      idTT: 0,
      idApart: 0,
      idOrder: 0,
      idStatus1: ["1", "2" ,"3"],
      // idStatus2: "2",
      // idStatus3: "3",
      lstApartmentS1: [],
      lstApartmentS2: [],
      lstApartmentS3: [],
      size: "small",
    };
    this.state.idStatus1.forEach((item) => {
      bodyFormData.append("idStatus1[]", item);
    })
    this.showApartmentStatus1(this.state.bodyFormData);
    //this.showApartmentStatus1(this.state.idStatus2);
    //this.showApartmentStatus1(this.state.idStatus3);
  }
  onChange = (e) => {
    this.setState({ size: e.target.value });
  };
  showApartmentStatus1 = (bodyFormData) => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus1", {
        idTk: this.state.idTk.toString(),
        idStatus: bodyFormData
      })
      .then((result) => {
        console.log(result.data[0].ID_TAIKHOAN);
        if(this.state.idStatus1[0]){
          console.log(this.state.idStatus1[0]);
          this.state.lstApartmentS1 = result.data[0].THONGTINCHUHOs[0].NHAs;
          this.setState(this);
        }
        if(this.state.idStatus1[1]){
          this.state.lstApartmentS2 = result.data[0].THONGTINCHUHOs[0].NHAs;
          this.setState(this);
        }
        if(this.state.idStatus1[2]){
          this.state.lstApartmentS3 = result.data[0].THONGTINCHUHOs[0].NHAs;
          this.setState(this);
        }
      });
  };
  showApartmentStatus2 = () => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus2", {
        idTk: this.state.idTk.toString(),
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
        idTk: this.state.idTk.toString(),
      })
      .then((result) => {
        console.log(result.data[0].ID_TAIKHOAN);
        this.state.lstApartmentS3 = result.data[0].THONGTINCHUHOs[0].NHAs;
        this.setState(this);
      });
  };
  changeActive = (idNha) => {
    axios.post("http://localhost:33456/api/partner/changeActive",{
      idNha: idNha.toString()
    }).then((result) => {
      console.log(result.data);
    }).catch((err) => console.log(err.result));
  }
  changeUnactive = (idNha) => {
    axios.post("http://localhost:33456/api/partner/changeUnactive",{
      idNha: idNha.toString()
    }).then((result) => {
      console.log(result.data);
    }).catch((err) => console.log(err.result));
  }
  render() {
    const { size } = this.state;
    return (
      <>
        <Navbar />
        <Tabs defaultActiveKey="1" type="card" size={size} style={{justifyContent: "center",paddingLeft: "185px",paddingTop: "20px"}}>
          <TabPane tab="Unactive" key={this.state.idStatus1[0]}>
            <div key={this.state.idTk}>
              {this.state.lstApartmentS1.map((item) => (
                <div key={item.ID_TAIKHOAN}>
                  <div value={item.ID_TT_CHUHO}>
                    <div value={item.THUTU_NHA}>
                      <p>ma nha: {item.ID_NHA}</p>
                      <p>loai nha: {item.ID_LOAINHA}</p>
                      <p>ten nha: {item.TEN_NHA}</p>
                      <button onClick={() => this.changeActive(item.ID_NHA)}>Active</button>
                      <p>------------------------------------------------</p>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </TabPane>
          <TabPane tab="Active" key={this.state.idStatus1[1]}>
            <div key={this.state.idTk}>
              {this.state.lstApartmentS2.map((item) => (
                <div key={item.ID_TAIKHOAN}>
                  <div value={item.ID_TT_CHUHO}>
                    <div value={item.THUTU_NHA}>
                      <p>ma nha: {item.ID_NHA}</p>
                      <p>loai nha: {item.ID_LOAINHA}</p>
                      <p>ten nha: {item.TEN_NHA}</p>
                      <button onClick={() => this.changeUnactive(item.ID_NHA)}>Unactive</button>
                      <p>------------------------------------------------</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tab="Hired" key={this.state.idStatus1[2]}>
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

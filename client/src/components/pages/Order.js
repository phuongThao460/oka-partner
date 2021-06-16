/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Navbar from "../paner-form/Navbar";
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTk: 1, //document.location.pathname.substring(10),
      idOrder: 0,
      lstOrder: [],
    };
    this.getListOrder();
    
  }
  getListOrder = () => {
    axios
      .post("http://localhost:33456/api/partner/getListOrder", {
        idTk: this.state.idTk.toString(),
      })
      .then((result) => {
        console.log(result.data[0].ID_TT_CHUHO);
        //console.log(result.data[0].NHAs[0].DATCANHOs[0].ID_TT_KHACHHANG);
        this.state.lstOrder = result.data[0].NHAs;
        this.setState(this);
        
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { lstOrder } = this.state;
    return (
      <>
        <Navbar/>
        {lstOrder.map((item) => (
          <div key={item.ID_TT_CHUHO}>
            <div value={item.THUTU_NHA}>
              {item["DATCANHOs"].map((index) => (
                <div key={index.ID_DATCANHO}>
                  <Link to={"/orderDetail/" + index.ID_DATCANHO}>ID_DATCANHO: {index.ID_DATCANHO}</Link>
                  <p>ID_TT_KHACHHANG: {index.ID_TT_KHACHHANG}</p>
                  <p>ID_NHA: {index.ID_NHA}</p>
                  <p>NGAYDAT: {index.NGAYDAT}</p>
                  <p>CHECKIN: {index.CHECKIN}</p>
                  <p>TONGTIEN_GIUONGPHU: {index.TONGTIEN_GIUONGPHU}</p>
                  
                  <p>------------------------------------------------</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Order;

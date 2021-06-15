/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from "axios";
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTk: document.location.pathname.substring(10),
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
        this.state.lstOrder = result.data[0].NHAs;
        this.setState(this);
      })
      .catch((err) => console.log(err));
  };
  changeHired = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/changeHired", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err.result));
  };
  render() {
    const { lstOrder } = this.state;
    return (
      <div>
        {lstOrder.map((item) => (
          <div key={item.ID_TT_CHUHO}>
            <div value={item.THUTU_NHA}>
              {item["DATCANHOs"].map((index) => (
                <div key={index.ID_DATCANHO}>
                  <p>ID_DATCANHO: {index.ID_DATCANHO}</p>
                  <p>ID_TT_KHACHHANG: {index.ID_TT_KHACHHANG}</p>
                  <p>ID_NHA: {index.ID_NHA}</p>
                  <p>NGAYDAT: {index.NGAYDAT}</p>
                  <p>CHECKIN: {index.CHECKIN}</p>
                  <p>TONGTIEN_GIUONGPHU: {index.TONGTIEN_GIUONGPHU}</p>
                  <button onClick={() => this.changeHired(index.ID_NHA)}>Submit</button>
                  <p>------------------------------------------------</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Order;

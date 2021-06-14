/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from "axios";
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTk: 1,
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
        this.state.lstOrder = result.data[0].NHAs[0].DATCANHOs;
        this.setState(this);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { lstOrder } = this.state;
    return (
      <div>
        {lstOrder.map(item => (
          <div>
            <div key={item.ID_TT_CHUHO}>
              <div value={item.THUTU_NHA}>
                <div value={item.ID_DATCANHO}>
                  <p>ID_DATCANHO: {item.ID_DATCANHO}</p>
                  <p>ID_TT_KHACHHANG: {item.ID_TT_KHACHHANG}</p>
                  <p>NGAYDAT: {item.NGAYDAT}</p>
                  <p>CHECKIN: {item.CHECKIN}</p>
                  <p>TONGTIEN_GIUONGPHU: {item.TONGTIEN_GIUONGPHU}</p>
                  <p>------------------------------------------------</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Order;

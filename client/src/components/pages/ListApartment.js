/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React from "react";

class ListApartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTk: 1,
      idTT: 0,
      idApart: 0,
      lstApartment: [],
    };
    this.showApartment();
  }
  showApartment = () => {

    axios
      .post("http://localhost:3000/api/partner/showMainContact", {
        idTk: this.state.idTk.toString(),
      })
      .then((result)=>{
        console.log(result.data);
        this.state.lstApartment = result.data[0].THONGTINCHUHOs[0].NHAs;
        this.setState(this);
      });
  };
  render() {
    return (
      <div key={this.state.idTk}>
        {this.state.lstApartment.map((item) => (
          <div  key={item.ID_TAIKHOAN}>
            <div key={item.ID_TT_CHUHO}>
              <div key={item.THUTU_NHA}>
                <p>ma nha: {item.ID_NHA}</p>
                <p>loai nha: {item.ID_LOAINHA}</p>
                <p>ten nha: {item.TEN_NHA}</p>
                <p>chinh sach huy phong: {item.FREE_CANCEL}</p>
                <p>checkin: {item.CHECKIN}</p>
                <p>checkout: {item.CHECKOUT}</p>
                <p>khoang cach: {item.KHOANGCACH_TRUNGTAMTP}</p>
                <p>so tang: {item.SOTANG}</p>
                <p>bua sang: {item.PHUPHI_BUASANG}</p>
                <p>so nha: {item.SONHA}</p>
                <p>ten duong: {item.TEN_DUONG}</p>
                <p>dien tich: {item.DIENTICH} km</p>
                <p>quan: {item.ID_QUAN}</p>
                <p>so nguoi: {item.SO_NGUOI}</p>
                <p>so giuong phu: {item.SO_GIUONGPHU}</p>
                <p>------------------------------------------------</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListApartment;

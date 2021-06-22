/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React from "react";
//import { Link } from "react-router-dom";
class ApartmentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idApartment: document.location.pathname.substring(15),
      apartmentInfo: {},
      lsRoom: {},
      room: {},
      bed: {}
    };
    this.getApartmentInfo();
  }
  getApartmentInfo = () => {
    axios
      .post("http://localhost:33456/api/partner/getDetailApartment", {
        id: this.state.idApartment.toString(),
      })
      .then((response) => {
        this.state.apartmentInfo = response.data[0];
        console.log(response.data[0]);
        this.setState(this, () => {
          this.getType(this.state.apartmentInfo.ID_LOAINHA.toString());
          this.getAddress(this.state.apartmentInfo.ID_NHA);
          this.getListRoom(this.state.apartmentInfo.ID_NHA);
        });
      });
  };
  getType = (idLoaiNha) => {
    console.log(this.state.apartmentInfo.ID_LOAINHA);
    axios
      .post("http://localhost:33456/api/partner/getTypeApart", {
        idType: idLoaiNha,
      })
      .then((response) => {
        this.state.typeApartment = response.data;
        this.setState(this);
      });
  };
  getAddress = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/getAddressApartment", {
        id: idNha.toString(),
      })
      .then((response) => {
        this.state.address = response.data;
        this.setState(this);
      });
  };
  getListRoom = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/getListRoom", {
        idApartment: idNha.toString(),
      })
      .then((response) => {
        this.state.lsRoom = response.data;
        this.state.room = response.data.ID_LOAIPHONG_LOAIPHONG;
        this.state.bed = response.data.ID_LOAIGIUONG_LOAIGIUONG;
        console.log(response.data.ID_LOAIPHONG_LOAIPHONG);
        this.setState(this);
      });
  };
  render() {
    return (
      <div className="detail-apartment-position">
        <div className="detail-apartment-wrap">
          <div className="header">
            <table>
              <tr>
                <td className="header-left">
                  <p className="nameApartment">
                    {this.state.apartmentInfo.TEN_NHA}
                  </p>
                  <p className="sticker">Biệt thự</p>
                  <p className="location">
                    <span>
                      <i class="fas fa-map-marker-alt mrg5"></i>
                    </span>
                    {this.state.address}
                  </p>
                </td>
                <td className="header-right">
                </td>
              </tr>
            </table>
          </div>
          <hr />
          <div className="images">
            <table>
              <tr>
                <td className="header-left" rowSpan="4"></td>
              </tr>
            </table>
          </div>
          <div className="booking">
            <table>
              <tr>
                <td className="header-right">
                  <p>Giá mỗi đêm từ</p>
                  <p className="priceRental">
                    {this.state.apartmentInfo.GIA -
                      this.state.apartmentInfo.KHUYENMAI}{" "}
                    VND
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="detail-apartment-wrap">
          <div className="roomzone-wrap">
            <table>
              <tr>
                <th colSpan="2">
                  <h3>{this.state.lsRoom.TEN_PHONG}</h3>
                </th>
              </tr>
              <tr>
                <td>{this.state.lsRoom.MOTA}</td>
              </tr>
              <tr>
                <td className="contain">
                  <ul>
                    <li>
                      Diện tích:{" "}
                      <span>
                      </span>{" "}
                      {this.state.lsRoom.CHIEUDAI_PHONG *
                        this.state.lsRoom.CHIEURONG_PHONG}{" "}
                      m2 ({this.state.lsRoom.CHIEUDAI_PHONG} x{" "}
                      {this.state.lsRoom.CHIEURONG_PHONG})
                    </li>
                    <li>
                      Loại phòng: {this.state.room.TEN_LOAIPHONG}
                      ({this.state.lsRoom.SONGUOITOIDA} người)
                    </li>
                    <li>
                      Loại giường:{" "}
                      {this.state.bed.TEN_LOAIGIUONG}
                    </li>
                    <li>Số giường phụ: {this.state.lsRoom.SOGIUONG_PHU}</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="else-wrap">
          <table>
            <tr>
              <th className="title">Mô tả chung</th>
              <td>
                <ul>
                  <li>
                    <b>Vị trí</b>
                  </li>
                  <li>Địa chỉ: {this.state.address}</li>
                  <li>Diện tích: {this.state.apartmentInfo.DIENTICH} m2</li>
                  <li>
                    Khoảng cách đến trung tâm thành phố:{" "}
                    {this.state.apartmentInfo.KHOANGCACH_TRUNGTAMTP}
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Giờ nhận phòng và trả phòng</b>
                  </li>
                  <li>Giờ nhận phòng: {this.state.apartmentInfo.CHECKIN}</li>
                  <li>Giờ trả phòng: {this.state.apartmentInfo.CHECKOUT}</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ApartmentInfo;

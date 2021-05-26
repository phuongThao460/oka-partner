/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from 'axios'
class Rooms extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idRoom: 0,
      idBed: 0,
      lstRoom: [],
      lstBed: []
    };
    this.getListRoom();
    this.getListBed();
  }
  getListRoom = () => {
    axios.post("http://localhost:3000/partner/registrationDetail/getRoomType",{}).then(
      (response) => {
        this.state.lstRoom = response.data;
        this.setState(this);
      }
    )
  }
  getListBed = () => {
    axios.post("http://localhost:3000/api/partner/registrationDetail/getBedType",{}).then(
      (response) => {
        this.state.lstBed = response.data;
        this.setState(this);
      }
    )
  }
  changeRoomStyle = (e) => {
    this.state.idRoom = e.target.value;
    this.setState(this);
  }
  changeBedStyle = (e) => {
    this.state.idBed = e.target.value;
    this.setState(this);
  }
  render() {
    return (
      <>
        <div className="table__column__2 css-column-2">
          <div
            className="table__title css-row"
            style={{ marginBottom: "16px" }}
          >
            <div className="column2 css-col">
              <div className="text2 css-text-2">
                <h2>Room</h2>
              </div>
            </div>
          </div>
          <div className="table__title css-row">
            <div className="detail__column css-col">
              <div
                className="box__detail css-bx-dtl"
                style={{ marginBottom: "30px" }}
              >
                <div className="box__detail__section header clearfix css-section">
                  <span>Rooms Types</span>
                </div>
                <div className="box__detail__section clearfix css-section">
                  <div>
                    <div
                      className="box css-bx-dtl"
                      style={{ marginTop: "15px", marginBottom: "30px" }}
                    >
                      <div className="box__detail__section header clearfix css-section css-room">
                        <div className="flexbox-room css-flex-room">
                          <div className="block">
                            <span>Rooms</span>
                          </div>
                          <div className="block">
                            <button
                              type="button"
                              className="btn btn--variant-link"
                              style={{ margin: "0", padding: "0" }}
                            >
                              <span>Duplicate</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="box__detail__section clearfix css-room-table">
                        <div className="block css-remove css-remove-2">
                          <div className="table-row css-remove-3">
                            <div className="table__column css-remove-item">
                              <span>
                                Are you sure you want to remove this room?
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="c-block">
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Room Name</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2 css-room-2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          name="generalInformation,propertyDetails,propertyName"
                                          touched="true"
                                          type="text"
                                          className="css-txt -control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <ul className="css-error --simple">
                                  <li>
                                    <span>This section must be filled.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="line css-line"
                            style={{ marginTop: "0px" }}
                          ></div>
                        </div>
                        <div className="c-block">
                          <div className="box-row css-row">
                            <div className="box-column css-box-col">
                              <label className="box-label css-label">
                                <span>Room Specification</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2 css-room-2">
                              <div className="c-block">
                                <label className="box-label css-label">
                                  <span>Room Type</span>
                                  <span className="label-required">*</span>
                                </label>
                                <div className="select control-container css-select css-radio-gr">
                                  <div className="select has-value">
                                    <select className="select-control" value={this.state.idRoom} onChange={this.changeRoomStyle}>
                                      <option className="select-option">
                                        {" "}
                                        1
                                      </option>
                                      {this.state.lstRoom.map((val, key)=><option value={val.ID_LOAIPHONG}>{val.TEN_LOAIPHONG}</option>)}
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="c-block">
                                <label className="box-label css-label">
                                  <span>Bed Type</span>
                                  <span className="label-required">*</span>
                                </label>

                                <div className="select control-container css-select css-radio-gr">
                                  <div className="select has-value">
                                  <select className="select-control" value={this.state.idBed} onChange={this.changeBedStyle}>
                                      <option className="select-option">
                                        {" "}
                                        1
                                      </option>
                                      {this.state.lstBed.map((val, key)=><option value={val.ID_LOAIGIUONG}>{val.TEN_LOAIGIUONG}</option>)}
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="c-block">
                                <label className="box-label css-label">
                                  <span>Maximum Occupancy</span>
                                  <span
                                    className="label-required"
                                    style={{
                                      marginLeft: "3px",
                                      color: "rgb(87, 167, 237)",
                                    }}
                                  >
                                    *
                                  </span>
                                </label>
                                <div
                                  className="input-group css-inp"
                                  style={{ display: "inline-block" }}
                                >
                                  <div
                                    className="input-group__inner"
                                    style={{ width: "fit-content" }}
                                  >
                                    <div
                                      className="input control-container css-radio-gr"
                                      style={{ width: "100px" }}
                                    >
                                      <div className="__inner">
                                        <div className="__padder">
                                          <input
                                            name="generalInformation,propertyDetails,numberOfRooms"
                                            touched="true"
                                            type="text"
                                            className="css-txt -control"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="input-group-addon css-number-2">
                                      <span>persons</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Rooms;

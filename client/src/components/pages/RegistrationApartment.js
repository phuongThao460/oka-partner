/* eslint-disable default-case */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-vars */
import React, { Component, createRef } from "react";
import "../../RegistrationDetail.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { PropertyData } from "../data/PropertyType";
class RegistrationApartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      idCountry: 0,
      idCity: 0,
      idDistrict: 0,
      idStyle: 0,
      lstStyle: [],
      lstCountry: [],
      lstCity: [],
      lstDistrict: [],
      ID_CSVC: 0,
      ID_CT_CSVC: 0,
      typeFaci: [],
      lstFaci: [],
    };
    this.fullName = createRef();
    this.email = createRef();
    this.phoneNumber = createRef();
    this.idenCode = createRef();
    this.idenType = createRef();
    this.country = createRef();
    this.gender = createRef();
    this.address = createRef();
    this.taxCode = createRef();
    this.nameHouse = createRef();
    this.street = createRef();
    this.typeProperty = 0;
    this.yes = true;
    this.no = false;
    this.idHouse = createRef();
    this.getListCountry();
    this.getListStyle();
    this.getListFacilities();
  }
  nextStep = (current) => {
    if (this.state.currentStep === 1) {
      Axios.post(
        "http://localhost:3000/api/partner/registrationDetail/contactRegistration",
        {
          "fullName": this.fullName.current.value,
          "email": this.email.current.value,
          "phoneNumber": this.phoneNumber.current.value,
          "idenCode": this.idenCode.current.value,
          "idenType": this.idenType.current.value,
          "country": this.country.current.value,
          "gender": this.gender.current.value,
          "address": this.address.current.value,
          "taxCode": this.taxCode.current.value,
        }
      ).then((response) => {
        console.log(response.data);
      });
    }
    this.state.currentStep = current + 1;
  };

  //   Axios.post(
  //     "http://localhost:3000/api/partner/registrationDetail/createApartment",
  //     {
  //       "idNha": this.idHouse.current.value,
  //       "tenNha": this.nameHouse.current.value,
  //       "idQuan": this.state.idDistrict,
  //       "tenDuong": this.street.current.value,
  //     }
  //   ).then((response) => {
  //     console.log(response.data);
  //   });
  // };
  getListFacilities = () => {
    Axios.post(
      "http://localhost:3000/api/partner/registrationDetail/getListPropFaci",
      {}
    ).then((response) => {
      this.state.typeFaci = response.data;
      this.setState(this);
    });
  };
  getListStyle = () => {
    Axios.post(
      "http://localhost:3000/api/partner/registrationDetail/getListStyle",
      {}
    ).then((response) => {
      this.state.lstCountry = response.data;
      this.setState(this);
    });
  };
  getListCountry = () => {
    Axios.post(
      "http://localhost:3000/api/partner/registrationDetail/getListCountry",
      {}
    ).then((response) => {
      this.state.lstCountry = response.data;
      this.setState(this);
    });
  };
  getListCity = () => {
    Axios.post(
      "http://localhost:3000/api/partner/registrationDetail/getListCity",
      { countryId: this.state.idCountry }
    ).then((response) => {
      this.state.lstCity = response.data;
      this.setState(this);
    });
  };
  getListDistrict = () => {
    Axios.post(
      "http://localhost:3000/api/partner/registrationDetail/getListDistrict",
      { cityId: this.state.idCity }
    ).then((response) => {
      this.state.lstDistrict = response.data;
      this.setState(this);
    });
  };
  changeCountry = (event) => {
    this.state.idCountry = event.target.value;
    this.setState(this);
    this.getListCity();
  };
  changeCity = (event) => {
    this.state.idCity = event.target.value;
    this.setState(this);
    this.getListDistrict();
  };
  changeDistrict = (event) => {
    this.state.idDistrict = event.target.value;
    this.setState(this);
  };
  render() {
    switch (this.state.currentStep) {
      case 1:
        return (
          <div className="oka-page">
            <div className="container css-theme">
              <div className="table-row css-row">
                <div
                  className="table__column css-column"
                  style={{ marginTop: "58px" }}
                >
                  <div className="table__detail css-detail">
                    <span>
                      <div className="slidebar css-sidebar">
                        <Link
                          className="slidebar-item slidebar-item--is-active css-check"
                          to="/"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              General Information
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item css-check"
                          to="/propertyDetail"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              Property Detail
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item css-check"
                          to="/propertyFacilities"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              Property Facilities
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item css-check"
                          to="/rooms"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">Rooms</span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item css-check"
                          to="/roomFacilities"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              Room Facilities
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item css-check"
                          to="/photos"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">Photos</span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item css-check"
                          to="/paymentInformation"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              Payment Information
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                      </div>
                    </span>
                    <div
                      className="table__block css-tbl-block"
                      style={{ marginTop: "30px" }}
                    >
                      <label className="block__label css-label">
                        <span>Mandatory Fields Progress</span>
                      </label>
                      <div className="block__row css-row">
                        <div className="block__column css-block-col">
                          <div className="progress css-progress">
                            <div
                              className="progress__bar"
                              role="progressbar"
                              aria-valuenow="52"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "52%" }}
                            ></div>
                          </div>
                        </div>
                        <div
                          align="right"
                          className="column css-col"
                          style={{ paddingLeft: "0px" }}
                        >
                          <span className="text css-text">52%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__column__2 css-column-2">
                  <div
                    className="table-row css-row"
                    style={{ marginBottom: "16px" }}
                  >
                    <div className="column2 css-col">
                      <div className="text2 css-text-2">
                        <h2>Generation Information</h2>
                      </div>
                    </div>
                  </div>
                  <div className="table__title css-row">
                    <div className="detail__column css-col">
                      <div
                        className="box__detail css-bx-dtl"
                        style={{ marginBottom: "16px" }}
                      >
                        <div className="box__detail__section header clearfix css-section">
                          <span>Property Detail</span>
                        </div>
                        <div className="box__detail__section clearfix css-section">
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>ID Property</span>
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
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.idHouse}
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Property Name</span>
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
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.nameHouse}
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Property Type</span>
                              </label>
                            </div>
                            <div className="box-column css-col">
                              <div className="radio-group control-container css-radio css-radio-gr">
                                {PropertyData.map((item, index) => {
                                  return (
                                    <div
                                      ref={this.typeProperty}
                                      key={index}
                                      className={item.cRadio}
                                    >
                                      <input
                                        name={item.inputName}
                                        type={item.type}
                                        value={item.value}
                                        id={item.idInput}
                                      />
                                      <label htmlFor={item.labelName}>
                                        <div className={item.styleSpan}>
                                          <b>
                                            <span>{item.nameSpan}</span>
                                          </b>
                                          <span>{item.detailSpan}</span>
                                        </div>
                                      </label>
                                    </div>
                                  );
                                })}
                                <div
                                  className="c-flexbox css-flexbox"
                                  style={{
                                    marginTop: "16px",
                                    marginBottom: "-15px",
                                  }}
                                >
                                  <div
                                    className="radio css-btn-radio"
                                    style={{ marginTop: "8px" }}
                                  >
                                    <input
                                      name="generalInformation,propertyDetails,propertyType"
                                      type="radio"
                                      value="HOTEL"
                                      id="radio-31"
                                      className="radio-31"
                                    />
                                    <label htmlFor="radio-31">
                                      <div className="css-span">
                                        <b>
                                          <span>Other</span>
                                        </b>
                                      </div>
                                    </label>
                                  </div>
                                  <div
                                    className="c-block"
                                    style={{ marginLeft: "16px" }}
                                  >
                                    <div
                                      className="block-select control-container css-select css-radio-gr"
                                      style={{ width: "250px" }}
                                    >
                                      <div className="select control-container css-select css-radio-gr">
                                        <div className="select has-value">
                                          <select
                                            className="select-control"
                                            value={this.state.idStyle}
                                          >
                                            <option
                                              value="0"
                                              className="select-option"
                                            >
                                              Select Type
                                            </option>
                                            {this.state.lstStyle.map(
                                              (item, index) => (
                                                <option value={item.ID_STYLE}>
                                                  {item.TEN_STYLE}
                                                </option>
                                              )
                                            )}
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="line css-line"
                            style={{ marginTop: "0px" }}
                          ></div>
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Property Address</span>
                              </label>
                            </div>
                            <div className="c-column css-col">
                              <div
                                className="c-block"
                                style={{ marginTop: "16px" }}
                              >
                                <label className="c-label css-label">
                                  <span>Street Address</span>
                                  <span className="label-required">*</span>
                                </label>
                                <div className="input-group css-inp">
                                  <div className="input-group__inner">
                                    <div className="input control-container --is-error css-radio-gr c-textarea">
                                      <div className="__inner">
                                        <div className="__padder --enter-active">
                                          <textarea
                                            ref={this.street}
                                            touched="true"
                                            type="text"
                                            className="-control css-textarea"
                                            rows="3"
                                            style={{ resize: "vertical" }}
                                          />
                                        </div>
                                        <span>
                                          <div className="css-icons -error-icon">
                                            <div
                                              id="tooltip-41"
                                              className="__inner c-tooltip---target c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
                                            >
                                              <svg
                                                className="c-icon css-svg"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                style={{
                                                  height: "20.02px",
                                                  width: "20.02px",
                                                }}
                                              >
                                                <g id="info-circle-outline">
                                                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="c-block"
                                style={{ marginTop: "16px" }}
                              >
                                <label className="c-label css-label">
                                  <span>Country</span>
                                  <span className="label-required">*</span>
                                </label>
                                <div
                                  className="select control-container css-select css-radio-gr"
                                  style={{ width: "250px" }}
                                >
                                  <div className="select has-value">
                                    <select
                                      className="select-control"
                                      value={this.state.idCountry}
                                      onChange={this.changeCountry}
                                    >
                                      <option
                                        value="0"
                                        className="select-option"
                                      >
                                        Select Country...
                                      </option>
                                      {this.state.lstCountry.map((item) => (
                                        <option value={item.ID_QUOCGIA}>
                                          {item.TEN_QUOCGIA}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <ul className="css-error --simple">
                                    <li>This section must be fill</li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="c-block"
                                style={{ marginTop: "16px" }}
                              >
                                <label className="c-label css-label">
                                  <span>City</span>
                                  <span className="label-required">*</span>
                                </label>
                                <div
                                  className="select control-container css-select css-radio-gr"
                                  style={{ width: "250px" }}
                                >
                                  <div className="select has-value">
                                    <select
                                      className="select-control"
                                      value={this.state.idCity}
                                      onChange={this.changeCity}
                                    >
                                      <option className="select-option">
                                        Select City...
                                      </option>
                                      {this.state.lstCity.map((item) => (
                                        <option value={item.ID_THANHPHO}>
                                          {item.TEN_THANHPHO}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <ul className="css-error --simple">
                                    <li>This section must be fill</li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="c-block"
                                style={{ marginTop: "16px" }}
                              >
                                <label className="c-label css-label">
                                  <span>District</span>
                                  <span className="label-required">*</span>
                                </label>
                                <div
                                  className="select control-container css-select css-radio-gr"
                                  style={{ width: "250px" }}
                                >
                                  <div className="select has-value">
                                    <select
                                      className="select-control"
                                      value={this.state.idDistrict}
                                      onChange={this.changeDistrict}
                                    >
                                      <option className="select-option">
                                        Select District...
                                      </option>
                                      {this.state.lstDistrict.map(
                                        (item, index) => (
                                          <option
                                            value={item.ID_QUAN}
                                            ref={item.ID_QUAN}
                                          >
                                            {item.TEN_QUAN}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                  <ul className="css-error --simple">
                                    <li>This section must be fill</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="line css-line"
                            style={{ marginTop: "0px" }}
                          ></div>
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Phone Number</span>
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
                            </div>
                            <div className="box-column css-bxcol2">
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
                                          value=""
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Number Of Rooms</span>
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
                            </div>
                            <div className="box-column css-box-col">
                              <div
                                className="input-group css-number"
                                style={{ display: "inline-block" }}
                              >
                                <div className="input-group__inner">
                                  <div className="input control-container --is-error css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          name="generalInformation,propertyDetails,numberOfRooms"
                                          touched="true"
                                          type="text"
                                          className="css-txt -control"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-group-addon css-number-2">
                                    <span>rooms</span>
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
                        </div>
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
                          <span>Main Contact</span>
                        </div>
                        <div className="box__detail__section clearfix css-section">
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Full Name</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.fullName}
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Email</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.email}
                                          touched="true"
                                          type="email"
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Phone Number</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.phoneNumber}
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Identification Code</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.idenCode}
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Identification Type</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.idenType}
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Country</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.country}
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Gender</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.gender}
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Address</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.address}
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Tax Code</span>
                                <span className="label-required">*</span>
                              </label>
                            </div>
                            <div className="box-column css-bxcol2">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.taxCode}
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block css-contact">
                    <Link to="/registrationDetail/propertyDetail">
                      <button
                        className="btn-contact"
                        onClick={this.createContact}
                      >
                        Save and Continues
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="oka-page">
            <div className="container css-theme">
              <div className="table-row css-row">
                <div
                  className="table__column css-column"
                  style={{ marginTop: "58px" }}
                >
                  <div className="table__detail css-detail">
                    <span>
                      <div className="slidebar css-sidebar">
                        <Link
                          className="slidebar-item css-check"
                          to="/"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              General Information
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item slidebar-item--is-active css-check"
                          to="/propertyDetail"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              Property Detail
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item css-check"
                          to="/propertyFacilities"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              Property Facilities
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item css-check"
                          to="/rooms"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">Rooms</span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item slidebar-item--is-active css-check"
                          to="/registrationDetail/generationInformation"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              Room Facilities
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item slidebar-item--is-active css-check"
                          to="/registrationDetail/generationInformation"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">Photos</span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="slidebar-item slidebar-item--is-active css-check"
                          to="/registrationDetail/generationInformation"
                        >
                          <div className="flexbox-sidebar css-nb">
                            <span className="text css-nb-text">
                              Payment Information
                            </span>
                            <span
                              className="bagde__number bagde__color bagde__pill css-bagde"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              7
                            </span>
                          </div>
                        </Link>
                      </div>
                    </span>
                    <div
                      className="table__block css-tbl-block"
                      style={{ marginTop: "30px" }}
                    >
                      <label className="block__label css-label">
                        <span>Mandatory Fields Progress</span>
                      </label>
                      <div className="block__row css-row">
                        <div className="block__column css-block-col">
                          <div className="progress css-progress">
                            <div
                              className="progress__bar"
                              role="progressbar"
                              aria-valuenow="52"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "52%" }}
                            ></div>
                          </div>
                        </div>
                        <div
                          align="right"
                          className="column css-col"
                          style={{ paddingLeft: "0px" }}
                        >
                          <span className="text css-text">52%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table__column__2 css-column-2">
                  <div
                    className="table__title css-row"
                    style={{ marginBottom: "16px" }}
                  >
                    <div className="column2 css-col">
                      <div className="text2 css-text-2">
                        <h2>Property Detail</h2>
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
                          <span>Property Details</span>
                        </div>
                        <div className="box__detail__section clearfix css-section">
                          <div className="box-row css-row">
                            <div className="box-column css-box-col">
                              <label className="box-label css-label">
                                <span>Main Currency</span>
                              </label>
                            </div>
                            <div className="box-column css-col">
                              <span>Australian Dollar (AUD)</span>
                            </div>
                          </div>
                          <div
                            className="line css-line"
                            style={{ marginTop: "0px" }}
                          ></div>
                          <div
                            className="line css-line"
                            style={{ marginTop: "0px" }}
                          ></div>
                          <div className="box-row css-row">
                            <div className="box-column css-box-col">
                              <label className="box-label css-label">
                                <span>Check-In Time</span>
                              </label>
                            </div>
                            <div
                              className="box-column css-column"
                              style={{ marginRight: "20px" }}
                            >
                              <label className="box-label css-label">
                                <span>from</span>
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
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="timepicker control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <div
                                          className="time-clock"
                                          noValidate
                                          style={{ position: "relative" }}
                                        >
                                          <input
                                            id="time"
                                            type="time"
                                            defaultValue="07:30"
                                            className="time-input css-txt"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-row css-row">
                            <div className="box-column css-box-col">
                              <label className="box-label css-label">
                                <span>Check-Out Time</span>
                              </label>
                            </div>
                            <div
                              className="box-column css-column"
                              style={{ marginRight: "20px" }}
                            >
                              <label className="box-label css-label">
                                <span>latest at</span>
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
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="timepicker control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <div
                                          className="time-clock"
                                          noValidate
                                          style={{ position: "relative" }}
                                        >
                                          <input
                                            id="time"
                                            type="time"
                                            defaultValue="07:30"
                                            className="time-input css-txt"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="line css-line"
                            style={{ marginTop: "0px" }}
                          ></div>
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Distance to City Center</span>
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
                            </div>
                            <div className="box-column css-box-col">
                              <div
                                className="input-group css-inp"
                                style={{ display: "inline-block" }}
                              >
                                <div className="input-group__inner">
                                  <div
                                    className="input control-container --is-error css-radio-gr"
                                    style={{ width: "130px" }}
                                  >
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          name="generalInformation,propertyDetails,distanceToCityCenter "
                                          touched="true"
                                          type="text"
                                          className="css-txt -control"
                                          ref={this.distance}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-group-addon css-number-2">
                                    <span>km</span>
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
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Number of Floors</span>
                              </label>
                            </div>
                            <div className="box-column css-column">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          name="generalInformation,propertyDetails,distanceToCityCenter "
                                          touched="true"
                                          type="text"
                                          className="css-txt -control"
                                          ref={this.numberFloor}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-group-addon css-number-2">
                                    <span>floors</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="line css-line"
                            style={{ marginTop: "0px" }}
                          ></div>
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>
                                  Additional Breakfast Charge (Exclude Room
                                  Rate)
                                </span>
                              </label>
                            </div>
                            <div className="box-column css-column">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input-group-addon css-number-2">
                                    <span>AUD</span>
                                  </div>
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          ref={this.addBFast}
                                          name="generalInformation,propertyDetails,breakfastCharge"
                                          touched="true"
                                          type="text"
                                          className="css-txt-2 -control"
                                        />
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
                  <div className="table__title css-row">
                    <div className="detail__column css-col">
                      <div
                        className="box__detail css-bx-dtl"
                        style={{ marginBottom: "30px" }}
                      >
                        <div className="box__detail__section header clearfix css-section">
                          <span>Property Cancellation Policy</span>
                          <span
                            className="label-required"
                            style={{
                              marginLeft: "3px",
                              color: "rgb(87, 167, 237)",
                            }}
                          >
                            *
                          </span>
                        </div>
                        <div className="box__detail__section clearfix css-section">
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{ marginTop: "8px" }}
                            >
                              <label className="box-label css-label">
                                <span>Cancellation Policy</span>
                              </label>
                            </div>
                            <div
                              className="c-column css-bxcol2"
                              style={{ marginTop: "-4px" }}
                            >
                              <div
                                touched="true"
                                value="NO_PAST_NAME"
                                class="radio-group control-container css-radio css-radio-gr"
                              >
                                <div className="radio c-radio--is-inline css-btn-radio">
                                  <input
                                    name="generalInformation,propertyDetails,previousNameBoolean"
                                    type="radio"
                                    value="YES_PAST_NAME"
                                    id="radio-9"
                                  />
                                  <label className="" for="radio-9">
                                    <span>Yes</span>
                                  </label>
                                </div>
                                <div
                                  className="radio c-radio--is-inline css-btn-radio"
                                  style={{ marginTop: "16px" }}
                                >
                                  <input
                                    name="generalInformation,propertyDetails,previousNameBoolean"
                                    type="radio"
                                    value="NO_PAST_NAME"
                                    id="radio-10"
                                  />
                                  <label className="" for="radio-10">
                                    <span>No</span>
                                  </label>
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
        );
      // case 3:
      // return()
      // case 4:
      //   return()
      //   case 5:
      //     return()
      //     case 6:
      //       return()
      //       case 7:
      //         return()
      //         case 8: return()
    }
  }
}
export default RegistrationApartment;

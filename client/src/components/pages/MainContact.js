import React, { createRef } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../../RegistrationDetail.css";
class MainContact extends React.Component {
  constructor(props) {
    super(props);
    this.fullName = createRef();
    this.email = createRef();
    this.phoneNumber = createRef();
    this.idenCode = createRef();
    this.idenType = createRef();
    this.country = createRef();
    this.gender = createRef();
    this.address = createRef();
    this.taxCode = createRef();
  }
  createContact = () => {
    Axios.post(
      "http://localhost:3000/api/partner/registrationDetail/contactRegistration",
      {
        fullName: this.fullName.current.value,
        email: this.email.current.value,
        phoneNumber: this.phoneNumber.current.value,
        idenCode: this.idenCode.current.value,
        idenType: this.idenType.current.value,
        country: this.country.current.value,
        gender: this.gender.current.value,
        address: this.address.current.value,
        taxCode: this.taxCode.current.value,
      }
    ).then((response) => {
      console.log(response.data);
    });
  };
  render() {
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
                      key="1"
                      to="/registrationDetail/mainContact"
                      className="slidebar-item slidebar-item--is-active css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">Main Contact</span>
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
                      key="1"
                      to="/registrationDetail/generationInformation"
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
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
                      key="1"
                      to="/registrationDetail/propertyFacilities"
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
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
                      key="1"
                      to="/registrationDetail/rooms"
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
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
                      key="1"
                      to="/registrationDetail/roomFacilities"
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
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
                    <Link key="1" to="" className="slidebar-item css-check">
                      <div className="c-flexbox css-nb">
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
                    <Link key="1" to="" className="slidebar-item css-check">
                      <div className="c-flexbox css-nb">
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
                    <h2>Main Contact</h2>
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
                <Link to="/registrationDetail/generationInformation">
                  <button className="btn-contact" onClick={this.createContact}>
                    Save and Continues
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContact;

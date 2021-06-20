/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React, { Component } from "react";
import Navbar from "../paner-form/Navbar";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      idTT: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      idenCode: "",
      idenType: "",
      country: "",
      gender: "",
      address: "",
      taxCode: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      idTT: nextProps.idTT,
      fullName: nextProps.fullName,
      email: nextProps.email,
      phoneNumber: nextProps.phoneNumber,
      idenCode: nextProps.idenCode,
      idenType: nextProps.idenType,
      country: nextProps.country,
      gender: nextProps.gender,
      address: nextProps.address,
      taxCode: nextProps.taxCode,
    });
  }

  fullNameHandler(e) {
    this.setState({ fullName: e.target.value });
  }

  emailHandler(e) {
    this.setState({ email: e.target.value });
  }
  phoneNumberHandler(e) {
    this.setState({ phoneNumber: e.target.value });
  }
  idenCodeHandler(e) {
    this.setState({ idenCode: e.target.value });
  }
  idenTypeHandler(e) {
    this.setState({ idenType: e.target.value });
  }
  countryHandler(e) {
    this.setState({ country: e.target.value });
  }
  genderHandler(e) {
    this.setState({ gender: e.target.value });
  }
  addressHandler(e) {
    this.setState({ address: e.target.value });
  }
  taxCodeHandler(e) {
    this.setState({ taxCode: e.target.value });
  }
  handleSave = (idtt) => {
    axios
      .post("http://localhost:33456/api/partner/updateContact", {
        idTT: idtt.toString(),
        fullName: this.state.fullName,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        idenCode: this.state.idenCode,
        idenType: this.state.idenType,
        country: this.state.country,
        gender: this.state.gender,
        address: this.state.address,
        taxCode: this.state.taxCode,
      })
      .then((result) => {
        console.log(result.data);
        this.setState(this);
        window.location.reload();
      });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Jewel
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                <span className="modal-lable">Full Name:</span>
                <input
                  value={this.state.fullName}
                  onChange={(e) => this.fullNameHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Email:</span>
                <input
                  value={this.state.email}
                  onChange={(e) => this.emailHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Phone Number:</span>
                <input
                  value={this.state.phoneNumber}
                  onChange={(e) => this.phoneNumberHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Identification Code:</span>
                <input
                  value={this.state.idenCode}
                  onChange={(e) => this.idenCodeHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Identification Type:</span>
                <input
                  value={this.state.idenType}
                  onChange={(e) => this.idenTypeHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Country:</span>
                <input
                  value={this.state.country}
                  onChange={(e) => this.countryHandler(e)}
                />
              </p>

              {this.state.gender ? (
                <p>
                  <span className="modal-lable">Gender:</span>
                  <input
                    type="radio"
                    name="editContact,previousNameBoolean"
                    value={this.state.gender}
                    checked={this.state.gender}
                    onChange={(e) => this.genderHandler(e)}
                  />
                  <label className="" htmlFor="radio-9">
                    <span>Female</span>
                  </label>
                  <input
                    type="radio"
                    name="editContact,previousNameBoolean"
                    value={!this.state.gender}
                    onChange={(e) => this.genderHandler(e)}
                  />
                  <label className="" htmlFor="radio-10">
                    <span>Male</span>
                  </label>
                </p>
              ) : (
                <p>
                  <span className="modal-lable">Gender:</span>
                  <input
                    type="radio"
                    name="editContact,previousNameBoolean"
                    value={!this.state.gender}
                    onChange={(e) => this.genderHandler(e)}
                  />
                  <label className="" htmlFor="radio-9">
                    <span>Female</span>
                  </label>
                  <input
                    type="radio"
                    name="editContact,previousNameBoolean"
                    value={this.state.gender}
                    checked={this.state.gender === false}
                    onChange={(e) => this.genderHandler(e)}
                  />
                  <label className="" htmlFor="radio-10">
                    <span>Male</span>
                  </label>
                </p>
              )}

              <p>
                <span className="modal-lable">Address:</span>
                <input
                  value={this.state.address}
                  onChange={(e) => this.addressHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Tax Code:</span>
                <input
                  value={this.state.taxCode}
                  onChange={(e) => this.taxCodeHandler(e)}
                />
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  this.handleSave(this.state.idTT);
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class DetailAndEditProfile extends Component {
  constructor(props) {
    super(props);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      mainContact: {},
    };
    this.showMainContact();
  }

  showMainContact = () => {
    axios
      .post("http://localhost:33456/api/partner/showContact", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data.ID_TT_CHUHO);
        this.state.mainContact = result.data;
        this.setState(this);
      })
      .catch((err) => console.log(err.result));
  };

  replaceModalItem(index) {
    this.setState({
      requiredItem: index,
    });
  }

  saveModalDetails(item) {
    let tempbrochure = this.state.mainContact;
    tempbrochure = item;
    this.setState({ mainContact: tempbrochure });
  }

  render() {
    const { mainContact } = this.state;
    return (
      <>
        <Navbar />
        <div
          style={{
            textAlign: "center",
            paddingBottom: "45px",
            backgroundColor: "white"
          }}
        >
          <h1>Your Profile</h1>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "100px",
              backgroundColor: "white"
            }}
          >
            <table
              className="table table-borderless"
              style={{ width: "60%", fontSize: "20px", backgroundColor: "wheat", borderRadius: "4px" }}
            >
              <tbody>
                <tr>
                  <td className="span-name">Full Name</td>
                  <td className="p-name">{mainContact.TEN_CHUHO}</td>
                </tr>
                <tr>
                  <td className="span-name">Email</td>
                  <td className="p-name">{mainContact.EMAIL}</td>
                </tr>
                <tr>
                  <td className="span-name">Phone Number</td>
                  <td className="p-name">{mainContact.PHONE_NUMBER}</td>
                </tr>
                <tr>
                  <td className="span-name">Identification Code</td>
                  <td className="p-name">{mainContact.MA_GIAYTOTUYTHAN}</td>
                </tr>
                <tr>
                  <td className="span-name">Identification Type</td>
                  <td className="p-name">
                    {mainContact.LOAI_GIAYTOTUYTHAN}
                  </td>
                </tr>
                <tr>
                  <td className="span-name">Country</td>
                  <td className="p-name">{mainContact.QUOCTICH}</td>
                </tr>
                <tr>
                  <td className="span-name">Gender</td>
                  <td className="p-name">
                    {mainContact.GIOITINH ? "Nữ" : "Nam"}
                  </td>
                </tr>
                <tr>
                  <td className="span-name">Address</td>
                  <td className="p-name">{mainContact.DIACHI}</td>
                </tr>
                <tr>
                  <td className="span-name">Tax Code</td>
                  <td className="p-name">{mainContact.MASO_THUE}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="span-name"></td>
                  <td style={{ padding: "0" }}>
                    <button
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() =>
                        this.replaceModalItem(mainContact.ID_TT_CHUHO)
                      }
                      style={{ width: "176px", marginBottom: "20px" }}
                    >
                      edit
                    </button>{" "}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <Modal
          idTT={mainContact.ID_TT_CHUHO}
          fullName={mainContact.TEN_CHUHO}
          email={mainContact.EMAIL}
          phoneNumber={mainContact.PHONE_NUMBER}
          idenCode={mainContact.MA_GIAYTOTUYTHAN}
          idenType={mainContact.LOAI_GIAYTOTUYTHAN}
          country={mainContact.QUOCTICH}
          gender={mainContact.GIOITINH}
          address={mainContact.DIACHI}
          taxCode={mainContact.MASO_THUE}
          saveModalDetails={this.saveModalDetails}
        />
      </>
    );
  }
}

export default DetailAndEditProfile;

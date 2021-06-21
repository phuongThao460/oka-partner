/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from "axios";
import Navbar from "../paner-form/Navbar";
import { Link } from "react-router-dom"
class ListApartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: 1,
      idTT: 0,
      idApart: 0,
      idOrder: 0,
      idType: 0,
      lstApartmentS1: [],
      lstApartmentS2: [],
      lstApartmentS3: [],
      size: "small",
      nameStyle: {},
    };
    this.showApartmentStatus1();
    this.showApartmentStatus2();
    this.showApartmentStatus3();
  }
  toggleTab = (index) => {
    this.setState({ toggleState: index });
  };
  showApartmentStatus1 = () => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus1", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data);
        this.state.lstApartmentS1 = result.data;
        //this.state.nameStyle = result.data[0].NHAs[0].ID_LOAINHA_LOAINHA
        this.setState(this);
      });
  };
  getTypeApart(idStyle){
    axios
      .post("http://localhost:33456/api/partner/getTypeApart", {
        idType: idStyle.toString(),
      })
      .then((response) => {
        this.state.nameStyle = response.data;
        this.setState(this);
      });
  };
  showApartmentStatus2 = () => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus2", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        //console.log(result.data[0].NHAs[0].ID_LOAINHA);
        this.state.lstApartmentS2 = result.data;
        //this.state.nameStyle = result.data[0].NHAs[0].ID_LOAINHA_LOAINHA
        this.setState(this);
      });
  };
  showApartmentStatus3 = () => {
    axios
      .post("http://localhost:33456/api/partner/showListApartmentStatus3", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data)
        this.state.lstApartmentS3 = result.data;
        
        this.setState(this);
      });
  };
  getOrder = () => {
    this.setState(this);
    this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
  };
  changeActive = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/changeActive", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        window.location.reload();
      })
      .catch((err) => console.log(err.result));
  };
  changeUnactive = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/changeUnactive", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        window.location.reload();
      })
      .catch((err) => console.log(err.result));
  };
  deleteApartment = (idNha) => {
    axios
      .post("http://localhost:33456/api/partner/deleteRoom", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        //window.location.reload();
      })
      .catch((err) => alert(err.result));
    axios
      .post("http://localhost:33456/api/partner/deleteApartment", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 500) {
          alert("Cannot delete apartment ");
        }
        console.log(err.response.status);
      });
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="container" style={{ paddingTop: "50px" }}>
          <div style={{ float: "right", paddingRight: "3px" }}>
            <button onClick={() => this.getOrder()} className="btn-order">
              View Orders List
            </button>
          </div>
          <div className="bloc-tabs">
            <button
              className={
                this.state.toggleState === 1 ? "tabs active-tabs" : "tabs"
              }
              onClick={() => this.toggleTab(1)}
            >
              Unactive
            </button>
            <button
              className={
                this.state.toggleState === 2 ? "tabs active-tabs" : "tabs"
              }
              onClick={() => this.toggleTab(2)}
            >
              Active
            </button>
            <button
              className={
                this.state.toggleState === 3 ? "tabs active-tabs" : "tabs"
              }
              onClick={() => this.toggleTab(3)}
            >
              Hire
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                this.state.toggleState === 1
                  ? "content  active-content"
                  : "content"
              }
            >
              <table className="table" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th scope="col">ID Apartment</th>
                    <th scope="col">Apartment's Style</th>
                    <th scope="col">Apartment's Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.lstApartmentS1.map((item) => (
                    <tr>
                      <th scope="row">{item.ID_NHA}</th>
                      <td>{item.TEN_LOAINHA}</td>
                      <td>{item.TEN_NHA}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          style={{marginRight: "10px"}}
                          onClick={() => this.changeActive(item.ID_NHA)}
                        >
                          Active
                        </button>
                        <button
                          className="btn btn-danger"
                          style={{marginLeft: "10px"}}
                          onClick={() => this.deleteApartment(item.ID_NHA)}
                        >
                          Delete
                        </button>
                        <Link to={"/apartmentInfo/" + item.ID_NHA} className="btn btn-link">View</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className={
                this.state.toggleState === 2
                  ? "content  active-content"
                  : "content"
              }
            >
              <table className="table" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th scope="col">ID Apartment</th>
                    <th scope="col">Apartment's Style</th>
                    <th scope="col">Apartment's Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.lstApartmentS2.map((item) => (
                    <tr key={item.ID_TT_CHUHO}>
                      <th scope="row">{item.ID_NHA}</th>
                      <td>{item.TEN_LOAINHA}</td>
                      <td>{item.TEN_NHA}</td>
                      <td>
                        <button
                        className="btn btn-light"
                        style={{marginRight: "10px"}}
                          onClick={() => this.changeUnactive(item.ID_NHA)}
                        >
                          Unactive
                        </button>
                        <button
                          className="btn btn-danger"
                          style={{marginLeft: "10px"}}
                          onClick={() => this.deleteApartment(item.ID_NHA)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className={
                this.state.toggleState === 3
                  ? "content  active-content"
                  : "content"
              }
            >
              <table className="table" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th scope="col">ID Apartment</th>
                    <th scope="col">Apartment's Style</th>
                    <th scope="col">Apartment's Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.lstApartmentS3.map((item) => (
                    <tr key={item.ID_TT_CHUHO}>
                      <th scope="row">{item.ID_NHA}</th>
                      <td>{item.TEN_LOAINHA}</td>
                      <td>{item.TEN_NHA}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ListApartment;

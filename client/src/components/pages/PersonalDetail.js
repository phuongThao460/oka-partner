import { Component } from "react";
import "../../style/pages/PersonalDetail.scss";
import { Link } from "react-router-dom";
//import axios from "axios";

class PersonalDetail extends Component {
  render() {
    return (
      <div className="flexbox">
        <div className="container">
          <div className="card">
            <div className="title">
              <Link to="/register" className="register-link">
                <i class="fas fa-lg fa-arrow-left icon" />
              </Link>
              <h3>Traveloka Tera</h3>
            </div>

            <div className="card-body">
              <h5 className="card-title">What should we call you?</h5>
              <div className="person-form">
                <span className="form-label">First name</span>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter your first name here"
                  ref={this.loginNameRef}
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                ></input>

                <span className="form-label">Last name</span>
                <input
                  type="text"
                  placeholder="Enter your last name here"
                  ref={this.loginPWRef}
                ></input>

                <button onClick={this.confirmLogin} id="btn-next">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalDetail;

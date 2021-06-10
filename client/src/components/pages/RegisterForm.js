/* eslint-disable react/no-direct-mutation-state */
import { Component, createRef } from "react";
import "../../style/pages/RegisterForm.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import axios from "axios";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTk: 0,
    };
    this.loginNameRef = createRef();
    this.loginPWRef = createRef();
  }
  confirmRegister = () => {
    axios
      .post("http://localhost:33456/api/partner/register", {
        username: this.loginNameRef.current.value,
        password: this.loginPWRef.current.value,
      })
      .then((result) => {
        alert(result.data);
        this.props.history.push("/");
      })
      .catch((error) => {
        alert(error.data);
      });
  };
  render() {
    return (
      <div className="flexbox">
        <div className="container">
          <div className="card">
            <h3>Traveloka Tera</h3>
            <div className="card-body">
              <h5 className="card-title">Create New Tera Account</h5>

              <p className="card-text">
                List your property at Traveloka and let us help you connect with
                millions of guests!
              </p>
              <div className="reg-form">
                <span className="form-label">Your email address</span>
                <i class="fa fa-envelope icon"></i>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter your email address here"
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
                <span className="form-label">Your password</span>
                <i className="fa fa-lock fa-lg position-absolute icon"></i>
                <input
                  type="password"
                  placeholder="Enter your password here"
                  ref={this.loginPWRef}
                ></input>
                <button onClick={this.confirmRegister} id="btn-next">
                  Next
                </button>
              </div>
              <div className="line-spacing"></div>
              <p>
                Already have an account?{" "}
                <Link
                  to="/"
                  style={{ color: "rgb(88, 153, 214)", fontWeight: "600" }}
                >
                  Log in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;

import { Component, createRef } from "react";
import "../../style/pages/LoginForm.scss";
import { Link } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.loginNameRef = createRef();
    this.loginPWRef = createRef();
  }
  confirmLogin = async () => {
    await axios
      .post("http://localhost:3000/api/partner/signin", {
        username: this.loginNameRef.current.value,
        password: this.loginPWRef.current.value,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        alert(error.toJSON());
      });
  };
  render() {
    return (
      <div className="flexbox">
        <div className="container">
          <div className="card">
            <h3>Traveloka Tera</h3>
            <div className="card-body">
              <h4 className="card-title">Welcome back!</h4>

              <p className="card-text">
                Log in to manage your accommodation from checking reservations
                to managing room availability!
              </p>
              <div className="login-form">
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
                <i class="fa fa-lock fa-lg position-absolute icon"></i>
                <input
                  type="password"
                  placeholder="Enter your password here"
                  ref={this.loginPWRef}
                ></input>
                <a className="login-form-forgot" href="/#">
                  Forgot your password
                </a>
                <Link to="/AddHomeBlock"><button onClick={this.confirmLogin} id="btn-login">Log in</button></Link>
                
              </div>
              <div className="line-spacing"></div>

              <p>
                Not yet a partner? <Link to="/home">Register here</Link>
              </p>

              <div className="line-spacing"></div>

              <div className="icon">
                <a href="/#">
                  <img
                    src="../../images/ggplay.png"
                    alt="logostore"
                  />
                </a>
                <a href="/#">
                  <img
                    src="../../images/appstore.png"
                    alt="logostore"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;

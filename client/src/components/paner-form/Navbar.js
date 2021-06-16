import React from "react";
import { Link } from "react-router-dom";
import "../../style/paner-form/Navbar.css";
import { Button, ButtonLogIn } from "../paner-form/Button";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: localStorage.getItem("idTk"),
      username: localStorage.getItem("username"),
      click: false,
      logged: false,
    };
  }
  handleClick = () => this.setState(!this.state.click);
  closeMobileMenu = () => this.setState(false);
  render() {
    const {idUser, username } = this.state;
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={this.handleClick}>
              OKA Tera <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.click ? "fas fa-times" : "fas fa-bars"}
              />
            </div>
            <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={this.closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            <div className="verticalLine"></div>
            {idUser !== null ? (
              <div class="nav-item dropdown">
                <a
                  href="/#"
                  data-toggle="dropdown"
                  class="nav-item nav-link dropdown-toggle user-action"
                >
                  <div style={{ display: "inline-block", fontSize: "15px" }}>
                    <p>You login as: </p>
                    <p>{username}</p>
                    <b class="caret"></b>
                  </div>
                  
                </a>
                <div class="dropdown-menu">
                  <a href="/#" class="dropdown-item">
                    <i class="fa fa-user-o"></i> Profile
                  </a>
                  <div class="divider dropdown-divider"></div>
                  <Link to={"/"} class="dropdown-item">
                    <i class="material-icons">&#xE8AC;</i> Logout

                  </Link>
                </div>
              </div>
            ) : (
              <>
                <ButtonLogIn buttonStype="btn--secondary">Log In</ButtonLogIn>
                <Button buttonStype="btn--outline">
                  Register Your Accommodation
                </Button>
              </>
            )}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

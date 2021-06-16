import React from "react";
import { Link } from "react-router-dom";
import "../../style/paner-form/Navbar.css";
import { Button, ButtonLogIn } from "../paner-form/Button";
class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      click: false,
      logged: false,
    }
  }
  handleClick = () => this.setState(!this.state.click);
  closeMobileMenu = () => this.setState(false);
  render(){
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={this.handleClick}>
              OKA Tera <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/home" className="nav-links" onClick={this.closeMobileMenu}>
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
            {!this.state.logged && this.props.isLogged ? (
              <>
                Hi
              </>
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

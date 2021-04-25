import {Component} from "react";
import "../../style/pages/RegisterForm.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
//import axios from "axios";

class RegisterForm extends Component{
render(){
  return (
    <div className="flexbox">
      <div className="container">
        <div className="card">
          <h3>Traveloka Tera</h3>
          <div className="card-body">
            <h5 className="card-title">Create New Tera Account</h5>

            <p className="card-text">
            List your property at Traveloka and let us help you connect with millions of guests!
            </p>

            <Form
              method='POST'
              name="reg"
              initialValues={{ remember: false }}
            >
              <Form.Item
                name=''
                label="Your email address"
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
              >
                <Input
                  //ref={this.loginNameRef}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Enter your email address here"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  //onClick={this.confirmLogin}
                  type="primary"
                  htmlType="submit"
                  id="button-next"
                  block
                >
                  <Link to="/personal-detail">Next</Link>
                </Button>
              </Form.Item>
            </Form>

            <p>
            Already have an account? <Link to="/">Log in here</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
  
}

export default RegisterForm;

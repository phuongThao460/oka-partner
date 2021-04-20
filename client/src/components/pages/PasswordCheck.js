import { Component } from "react";
import "../../style/pages/PasswordCheck.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { LockOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Form, Input, Button, Radio } from "antd";
//import axios from "axios";

class PasswordCheck extends Component {
  state = {
    value: 1,
  };
  render() {
    const radioStyle = {
      display: "flex",
      //height: "35px",
      //lineHeight: "30px",
      marginBottom: "16px",
      marginRight:"0",
      alignItems: "center",
    };
    const { value } = this.state;

    return (
      <div className="flexbox">
        <div className="container">
          <div className="card">
            <div className="title">
              <button
                type="link"
                htmlType="submit"
                id="back-button"
                icon={<ArrowLeftOutlined className="site-form-item-icon" />}
              >
                <Link to="/register"></Link>
              </button>
              <h3>Traveloka Tera</h3>
            </div>

            <div className="card-body">
              <h5 className="card-title">Now—let's set up your password!</h5>
              <Form
                method="POST"
                name="pass"
                initialValues={{ remember: false }}
              >
              <div id="radio-group">
              <Radio.Group onChange={this.onChange} value={value}>
                <p>Here's how to make a strong password:</p>
                  <Radio value={1}><p id="text">use at least 8 characters (A–Z, 0–9)</p></Radio>
                  <Radio style={radioStyle} value={2}>
                  <p id="text">include lower case letters (a,b, and so on)</p>
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                  <p id="text">include upper case letters (A, B, and so on)</p>
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                  <p id="text">include numbers (1,2, and so on)</p>
                  </Radio>
                  <Radio style={radioStyle} value={5}>
                  <p id="text">avoid including your username</p>
                  </Radio>
                </Radio.Group>
              </div>
                <Form.Item
                  label="Password"
                  id="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    //ref={this.loginPWRef}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    //onClick={this.confirmLogin}
                    type="primary"
                    htmlType="submit"
                    id="button-password"
                    block
                  >
                    Next
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordCheck;

import { Component } from "react";
import "../../style/pages/PersonalDetail.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
//import axios from "axios";

class PersonalDetail extends Component {
  render() {
    return (
      <div className="flexbox">
        <div className="container">
          <div className="card">
            <div className="title">
              <Button
                type="link"
                htmlType="submit"
                id="back-button"
                icon={<ArrowLeftOutlined className="site-form-item-icon" />}
              >
                <Link to="/register"></Link>
              </Button>
              <h3>Traveloka Tera</h3>
            </div>

            <div className="card-body">
              <h5 className="card-title">What should we call you?</h5>
              <Form
                method="POST"
                name="per"
                initialValues={{ remember: false }}
              >
                <Form.Item name="" label="First name">
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Enter your first name here"
                  />
                </Form.Item>
                <Form.Item name="" label="Last name">
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Enter your last name here"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    onClick={this.confirmLogin}
                    type="primary"
                    htmlType="submit"
                    id="button-submit"
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

export default PersonalDetail;

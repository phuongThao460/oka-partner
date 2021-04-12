import React from 'react'
import '../App.scss'
import 'antd/dist/antd.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
function LoginForm() {
  return (
    <div className="flexbox">
      <div className="container">
        <div className="card">
            <h3>Traveloka Tera</h3>
            <div className="card-body">
              <h4 className="card-title">Welcome back!</h4>
              <p className="card-text">Log in to manage your accommodation from checking reservations to managing room availability!</p>
              <Form name="basic" initialValues={{remember: false,}}>
                <Form.Item
                    name=""
                    label="Your email address"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your email address here"/>
                  </Form.Item>
                      <Form.Item label="Password" id="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!',
                          },
                        ]}>
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"/>
                      </Form.Item>
                      <Form.Item><a className="login-form-forgot" href="/#">Forgot your password</a></Form.Item>
                      <Form.Item >
                        <Button type="primary" htmlType="submit" id="button-submit" block>
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
              <div className="line-spacing"></div>
              <p>Not yet a partner? <a href="/#">Register here</a></p>
              <div className="line-spacing"></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default LoginForm

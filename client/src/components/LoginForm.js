import React from 'react'
import '../style/login.scss'
import 'antd/dist/antd.css';
import {useForm} from 'react-hook-form';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button} from 'antd';
import axios from 'axios';
function LoginForm() {
  const {register, handleSubmit} = useForm();
  const onSubmit = async (data) =>{
    try {
      const response = await axios.post('http://localhost:3001/', data);
      console.log(`response`, response);
    } catch (error) {
      console.log(`error.response.data.message`, error.response.data.message)
    }
    
  }
  const handleGetUserClick = async () =>{
    try {
      const response = await axios.get('http://localhost:3001?email=rinneya@gmail.com');
      console.log(`response.data.profile`, response.data.profile);
    } catch (error) {
      console.log(`error.response.data.message`, error.response.data.message)
    }
    
  }
  return (
    <div className="flexbox">
      <div className="container">
        <div className="card">
            <h3>Traveloka Tera</h3>
            <div className="card-body">
              <h4 className="card-title">Welcome back!</h4>
              
              <p className="card-text">Log in to manage your accommodation from checking reservations to managing room availability!</p>
              
              <Form name="basic" initialValues={{remember: false,}} method='post' onSubmit={handleSubmit(onSubmit)}>
                <Form.Item name="" label="Your email address"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}>
                    <Input  {... register('email')} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your email address here"/>
                </Form.Item>
                <Form.Item label="Password" id="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}>
                  <Input.Password {... register('password')} prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item><a className="login-form-forgot" href="/#">Forgot your password</a></Form.Item>
                <Form.Item ><Button onClick={handleGetUserClick} type="primary" htmlType="submit" id="button-submit" block>Log in</Button></Form.Item>
              </Form>
              
              <div className="line-spacing"></div>
              
              <p>Not yet a partner? <a href="/#">Register here</a></p>
              
              <div className="line-spacing"></div>
              
              <div className="icon">
                <a href="/#"><img src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.15752-9/171394894_279771510359855_1592770365183563183_n.png?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=2qpQhAHDsD4AX9LHDEz&_nc_ht=scontent.fsgn4-1.fna&oh=df97f886d8443fc908d106ccf9bded4a&oe=609A6CA1" alt="logostore"/></a>
                <a href="/#"><img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/171809966_301492954709103_1844160620762849620_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=wCIGKhoA_IMAX-1UTVu&_nc_ht=scontent.fsgn3-1.fna&oh=e0b2b96897f7f31aa82040e5bde07d08&oe=6098B802" alt="logostore"/></a>
              </div>             
            </div>
          </div>
      </div>
    </div>
  )
}

export default LoginForm;

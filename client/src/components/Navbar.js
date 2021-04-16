import React from 'react'
import '../style/Navbar.scss'
import {  Layout, Menu }  from  'antd';
const { Header } = Layout;
function Navbar() {
  return (
    <div className="">
      <Layout className="layout">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  )
}

export default Navbar

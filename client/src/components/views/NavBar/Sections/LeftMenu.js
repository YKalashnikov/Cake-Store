import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <SubMenu title={
  <a href="/">Home</a>}>
    </SubMenu>
    <Menu.Item key="mail">
    <a href="/contact">Contact US</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu
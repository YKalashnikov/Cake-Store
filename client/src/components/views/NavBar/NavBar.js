import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button } from 'antd';
import './Sections/Navbar.css';
import { useSelector } from "react-redux";
import {RightOutlined} from '@ant-design/icons';

function NavBar() {
  
  const [visible, setVisible] = useState(false)
  let user = useSelector(state => state.user);

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };
//{firsrLetterLogo() || 'Logo'}
  const firsrLetterLogo = () =>{
   const firstLetter = user.userData? user.userData.name: ''
   return firstLetter
  }
  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>

      <div className="menu__logo">
        <a href="/">
        {firsrLetterLogo()}
           </a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <RightOutlined />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar
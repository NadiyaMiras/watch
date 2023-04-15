import React from 'react';
import a1 from './admin_right.module.css';
import { Button, Form, NavDropdown } from 'react-bootstrap';
const Admin_right = (props) => {
  const { hideLeftBar, setHideLeftBar } = props;
  const handleButtonClick = () => {
    setHideLeftBar(!hideLeftBar);
  }
  const logoutBtn = () => {
    localStorage.setItem('loginValue', "public")
    window.location.href = 'http://localhost:3000/'
  }
  return (
    <div className={hideLeftBar ? `${a1.right_menu} ${a1.activettopbar}` : a1.right_menu}>
      <div className={a1.btn_logo_wrapper}>
        <Button className={a1.btn} onClick={handleButtonClick}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </Button>
        NADIYA
      </div>
      <div>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className={a1.form_control} aria-label="Search" />
          <Button className={a1.search_btn}>
            <i class="fa fa-search" aria-hidden="true"></i>
          </Button>
        </Form>
      </div>
      <div className={a1.right_nav}>
        <div className={a1.icons}>
          <a href='#'>
            <i class="fa fa-bell-o" aria-hidden="true"></i>
          </a>
          <a href='#'>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
        </div>
        <div className={a1.profile}>
          <span className={a1.profile_left}>
            <img src={require('../images/user.png')} className={a1.profile_img} />
          </span>
          <NavDropdown title="Royal" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#" onClick={logoutBtn} className={a1.dropdown_item}>Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div >

  )
}

export default Admin_right

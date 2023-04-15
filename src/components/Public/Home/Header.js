import React, { useEffect, useState } from 'react';
import a1 from './header.module.css';
import { Form, Button, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  useEffect(() => {
    axios.get('http://www.nadiya.co.in/reactproject/api1/admin/categ_view.php').then(function (response) {
      setData(response.data)
    });
  }, [])
  const [values, setValue] = useState({ prdtName: "" })
  const search = (nam) => {
    const name = nam.target.name;
    const value = nam.target.value;
    setValue(values => ({ ...values, [name]: value }))
  }
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const submit = () => {
    axios.get('http://www.nadiya.co.in/reactproject/api1/public/search.php?name1=' + values.prdtName).then(function (response) {
      //console.log(response.data);
      if(response.data.length == 0) {
        navigate("/errorPage", { state: response.data });
      }else {
        navigate("/productView", { state: response.data });
      }
    });
  }
  const viewPrdts = (id) => {
    axios.get('http://www.nadiya.co.in/reactproject/api1/public/product_view.php?name1=' + id).then(function (response) {
      navigate("/productView", { state: response.data });
    });
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className={a1.headerTop}>
        <Container>
          <Navbar.Brand href="publicHome">
            NADIYA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={a1.toggle_btn} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Form className={a1.search}>
                <Form.Control type="search" placeholder="Search" className={a1.search_input} aria-label="Search" name="prdtName" value={values.prdtName} onChange={search} />
                <Button variant="outline-success" className={a1.search_btn} onClick={submit}>
                  <i class="fa fa-search" aria-hidden="true"></i>
                </Button>
              </Form>
            </Nav>
            <Nav className={a1.right_menu}>
              <Nav.Link href="publicHome" className={a1.menu_text}>Home</Nav.Link>
              <NavDropdown title="Watches" id="collasible-nav-dropdown"  >
                {data.map((s1) => (
                  (s1.name != "Watch straps" &&
                    <NavDropdown.Item className={a1.dropdown} key={s1.id}>
                      <a className={a1.menuDropdown} onClick={() => viewPrdts(s1.id)}>{s1.name}</a>
                    </NavDropdown.Item>
                  )
                ))}
              </NavDropdown>
              <Nav.Link href="#" className={a1.menu_text} onClick={() => (data.filter(s1 => s1.name == "Watch straps" && viewPrdts(s1.id)))}>Watch straps</Nav.Link>
              <Nav.Link href="login" className={a1.menu_text}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;

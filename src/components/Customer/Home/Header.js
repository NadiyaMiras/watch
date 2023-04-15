import React, { useEffect, useState } from 'react';
import a1 from './header.module.css';
import { Form, Button, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const [shoppingCart, setShoppingCart] = useState(false);
  const showCart = () => {
    setShoppingCart(!shoppingCart)
  }
  const [wishlist, setWishlist] = useState(false);
  const showWishlist = () => {
    setWishlist(!wishlist)
  }
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
      // console.log(response.data);
      if(response.data.length == 0) {
        navigate("/errorPage", { state: response.data });
      }else {
        navigate("/productView", { state: response.data });
      }
    });
  }
  useEffect(() => {
    axios.get('http://www.nadiya.co.in/reactproject/api1/admin/categ_view.php').then(function (response) {
      // console.log(response.data);
      setData(response.data)
    });
  }, [])
  const viewPrdts = (id) => {
    axios.get('http://www.nadiya.co.in/reactproject/api1/public/product_view.php?name1=' + id).then(function (response) {
      //console.log(response.data);
      navigate("/productView", { state: response.data });
    });
  }
  const count = useSelector((state) => {
    return state.count;
  })
  const logoutBtn = () => {
    localStorage.setItem('loginValue', "public")
    localStorage.removeItem('user')
    window.location.href = 'http://localhost:3000/'
  }
  const loginValue = JSON.parse(localStorage.getItem('user')).id;
  const [cartCnt, setCartCnt] = useState(0);
  const [wishCnt, setWishCnt] = useState(0);
  useEffect(() => {
    axios.post('http://www.nadiya.co.in/reactproject/api1/customer/cart_count.php', loginValue).then(function (response) {
      // console.log(response.data);
      setCartCnt(response.data);
    });

    axios.post('http://www.nadiya.co.in/reactproject/api1/customer/wish_count.php', loginValue).then(function (response) {
      // console.log(response.data);
      setWishCnt(response.data);
    });
  }, [])

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className={a1.headerTop}>
        <Container>
          <Navbar.Brand href="customerDashboard">
            NADIYA
          </Navbar.Brand>
          <div className={a1.mobile_menu}>
            <ul>
              <li onClick={showWishlist}>
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <div className={a1.mobile_cart_count}>{wishCnt}</div>
              </li>
              <li onClick={showCart}>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <div className={a1.mobile_cart_count}>{cartCnt}</div>
              </li>
            </ul>
          </div>
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
            <Nav className={a1.right_icons}>
              <Nav.Link href="customerDashboard" className={a1.menu_text}>Home</Nav.Link>
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
              <Nav.Link href="#" onClick={logoutBtn} className={a1.menu_text}>
                Logout
              </Nav.Link>
              <Nav.Link href="#" className={a1.iconHeadercart} onClick={showWishlist}>
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <div className={a1.cart_counter}>{wishCnt}</div>
              </Nav.Link>
              <Nav.Link className={a1.iconHeadercart} onClick={showCart}>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <div className={a1.cart_counter}>{cartCnt}</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
    </>
  )
}

export default Header



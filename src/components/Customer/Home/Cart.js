import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import a1 from './Cart.module.css';
import { useSelector } from 'react-redux';
import axios from 'axios'
const Cart = (props) => {
  const { shoppingCart, setShoppingCart } = props;
  const loginValue = JSON.parse(localStorage.getItem('user')).id;
  const [cartItems, setcartItems] = useState([]);
  const [cartItemsTot, setcartItemsTot] = useState([]);
  useEffect(() => {
    axios.post('http://127.0.0.1:8080/api1/customer/cart_view.php', loginValue).then(function (response) {
      //  console.log(response.data);
      setcartItems(response.data.data);
      setcartItemsTot(response.data.total);
    });
  }, [])

  const hideShoppingCart = () => {
    setShoppingCart(false);
  }
  const deletePrdt = (id) => {
    axios.get(`http://127.0.0.1:8080/api1/customer/cart_delete.php?name1=${id}&name2=${loginValue}`).then(function (response) {
      window.location.reload();
    });
  }

  return (

    <>
      <div className={shoppingCart ? `${a1.shopping_cart} ${a1.activeCart}` : a1.shopping_cart}>
        <div className={a1.cart_header}>
          <h5>YOUR CART</h5>
          <i class="fa fa-times" onClick={hideShoppingCart}></i>
        </div>
        <div className={a1.list_cart}>
          {cartItems && cartItems.map((product) => (
            <>
              <div className={a1.cart_wrapper} id="cart_wrapper" key={product.id}>
                <Row>
                  <Col lg={4} >
                    <div className={a1.cart_prdt_img}>
                      <img src={"http://127.0.0.1:8080/api1/ImageUploads/" + product.image} />
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className={a1.cart_prdt_content}>
                      <div className={a1.prdt_text}>
                        <h6>{product.description}</h6>
                        <h6>₹{product.price}</h6>
                      </div>
                      <div className={a1.prdt_qty_delete}>
                        <div className={a1.qty}>
                          <Form.Select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Form.Select>
                        </div>
                        <div className={a1.prdt_delete}>
                          <Button onClick={() => deletePrdt(product.id)}>Delete</Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </>
          ))}
        </div>
        <div className={a1.totalprice}>
          <div className={a1.allTotal}>
            <div className={a1.totaltext}>
              <h5>Total Price </h5>
            </div>
            <div className={a1.price}>
              <h5>₹{cartItemsTot}</h5>
            </div>
          </div>
          <Button className={a1.checkoutbtn}>Go to checkout</Button>
        </div>
      </div >
    </>
  )
}

export default Cart

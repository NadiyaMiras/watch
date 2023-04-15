import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import a1 from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const Wishlist = (props) => {
    const { wishlist, setWishlist } = props;
    const hideShoppingCart = () => {
        setWishlist(false);
    }
    const loginValue = JSON.parse(localStorage.getItem('user')).id;
    useEffect(() => {
        axios.post('http://127.0.0.1:8080/api1/customer/wishlist_view.php', loginValue).then(function (response) {
            // console.log(response.data);
            setwishlistItems(response.data);
        });

    }, [])
    const [wishlistItems, setwishlistItems] = useState([]);
    const dispatch = useDispatch();
    function deletePrdt(id) {
        axios.get(`http://127.0.0.1:8080/api1/customer/wishlist_delete.php?name1=${id}&name2=${loginValue}`).then(function (response) {
            window.location.reload();
        });
    }

    return (
        <>
            <div className={wishlist ? `${a1.shopping_cart} ${a1.activeCart}` : a1.shopping_cart}>
                <div className={a1.cart_header}>
                    <h5>MY WISHLIST</h5>
                    <i class="fa fa-times" onClick={hideShoppingCart}></i>
                </div>
                {wishlistItems && wishlistItems.map((product) => (
                    <>
                        <div className={a1.cart_wrapper} id="cart_wrapper" key={product.id}>
                            <Row>
                                <Col lg={4}>
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

            </div >
        </>
    )
}

export default Wishlist

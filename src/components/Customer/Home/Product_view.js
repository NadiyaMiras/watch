import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import a1 from './product_view.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../../redux-toolkit/countReducer';
import Cart from './Cart';
import Wishlist from './Wishlist';
import axios from 'axios';
const Product_view = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const prdtOrder = (price) => {
        navigate("/productOrder", { state: { a1: price } })
    }
    const dispatch = useDispatch();
    const [shoppingCart, setShoppingCart] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [wishlistItems, setWishlistItems] = useState({});
    const loginValue = JSON.parse(localStorage.getItem('user')).id;
    useEffect(() => {
        if (cartItems && cartItems.userId && cartItems.prdtId) {
            axios.post('http://127.0.0.1:8080/api1/customer/cart_insert.php', cartItems);
        }
        if (wishlistItems && wishlistItems.userId && wishlistItems.prdtId) {
            axios.post('http://127.0.0.1:8080/api1/customer/wishlist_insert.php', wishlistItems);
        }
    }, [cartItems, wishlistItems])

    function addToCart(s1) {
        dispatch(increment());
        // setShoppingCart(!shoppingCart);
        setCartItems({ userId: loginValue, prdtId: s1.id, count: "1" });
        window.location.reload();
    }
    function addToWishlist(s1) {
        dispatch(increment());
        // setWishlist(!wishlist);
        setWishlistItems({ userId: loginValue, prdtId: s1.id, count: "1" });
        window.location.reload();
    }
    return (
        <div>
            <Header />
            <div className={a1.productBanner}>
                <Container>
                    <div className={a1.productBannerContent}>
                        <h3>WATCHES FOR
                            MEN & WOMEN</h3>
                        <p>A modern classic for every occasion</p>
                    </div>
                </Container>
            </div>
            <Container>
                <div className={a1.productWrapper}>
                    {location.state.map((s1) => (
                        <>
                            <div className={a1.productItem}>
                                <div key={s1.name} className={a1.productBox}>
                                    <div className={a1.card_img}>
                                        <img src={"http://127.0.0.1:8080/api1/ImageUploads/" + s1.image} />
                                        <div className={a1.wishlist_icon} onClick={() => addToWishlist(s1)}>
                                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className={a1.card_content} key={s1.id}>
                                        <h6>{s1.description}</h6>
                                        <h6>{s1.price}</h6>
                                        <div className={a1.product_btn}>
                                            <Button className={a1.cart_btn} onClick={() => addToCart(s1)}>Add to cart</Button>
                                            <Button className={a1.buy_btn} onClick={() => prdtOrder(s1.price)}>Buy Now</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Cart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
                            <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
                        </>
                    ))}
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Product_view


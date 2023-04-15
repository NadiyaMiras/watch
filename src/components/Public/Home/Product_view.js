import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import a1 from './product_view.module.css';
const Product_view = () => {
    const location = useLocation();
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
                                    </div>
                                    <div className={a1.card_content} key={s1.id}>
                                        <h6>{s1.description}</h6>
                                        <h6>₹{s1.price}</h6>
                                        <div className={a1.product_btn}>
                                            <Button href='login' className={a1.cart_btn}>Add to cart</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Product_view

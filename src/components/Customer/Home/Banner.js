import React, { useState, useEffect } from 'react';
import a1 from './Banner.module.css';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Banner = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api1/admin/categ_view.php').then(function (response) {
            setData(response.data)
        });
    }, [])
    const viewPrdts = (id) => {
        axios.get('http://127.0.0.1:8080/api1/public/product_view.php?name1=' + id).then(function (response) {
            navigate("/productView", { state: response.data });
        });
    }
    return (
        <div>
            <Carousel fade>
                <Carousel.Item className={a1.carouselItem}>
                    <img className="d-block w-100" src={require('../../images/watch_banner_2.jpg')} alt="First slide" />
                    <Carousel.Caption className={a1.carouselCaption}>
                        <h3>LONGLASTING WATCH</h3>
                        <p>Exclusive stylish hand watch for man</p>
                        <Button className={a1.explore_btn} onClick={() => (data.filter(s1 => s1.name == "Women" && viewPrdts(s1.id)))}>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={a1.carouselItem}>
                    <img className="d-block w-100" src={require('../../images/watch_banner_1.png')} alt="Second slide" />
                    <Carousel.Caption className={a1.carouselCaption}>
                        <h3>BEST QUALITY SMARTWATCH</h3>
                        <p>The best waterproof smart watch</p>
                        <Button className={a1.explore_btn} onClick={() => (data.filter(s1 => s1.name == "Women" && viewPrdts(s1.id)))}>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={a1.carouselItem}>
                    <img className="d-block w-100" src={require('../../images/watch_banner_3.jpg')} alt="Third slide" />
                    <Carousel.Caption className={a1.carouselCaption}>
                        <h3>OUR BEST COLLECTION</h3>
                        <p>The new style for you</p>
                        <Button className={a1.explore_btn} onClick={() => (data.filter(s1 => s1.name == "Women" && viewPrdts(s1.id)))}>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner

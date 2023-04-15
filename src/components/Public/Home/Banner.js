import React, { useState, useEffect } from 'react';
import a1 from './Banner.module.css';
import { Container, Button } from 'react-bootstrap';
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
        <div className={a1.banner_img}>
            <Container>
                <div className={a1.banner_caption}>
                    <h3>OUR BEST COLLECTION</h3>
                    <p>The new style for you</p>
                    <Button className={a1.explore_btn} onClick={() => (data.filter(s1 => s1.name == "Women" && viewPrdts(s1.id)))}>Explore</Button>
                </div>
            </Container>
        </div>
    )
}

export default Banner

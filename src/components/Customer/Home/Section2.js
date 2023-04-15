import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import a1 from './section.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Section2 = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api1/admin/categ_view.php').then(function (response) {
            // console.log(response.data);
            setData(response.data)
        });
    }, [])
    const viewPrdts = (id) => {
        axios.get('http://127.0.0.1:8080/api1/public/product_view.php?name1=' + id).then(function (response) {
            //  console.log(response.data);
            navigate("/productView", { state: response.data });
        });
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={4} xs={12}>
                        <div className={a1.box_1}>
                            <div>
                                <h4>GIFTS FOR HIM</h4>
                                <Button className={a1.gift_btn} onClick={() => (data.filter(s1 => s1.name == "Men" && viewPrdts(s1.id)))}>Shop Now</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12}>
                        <div className={a1.box_3}>
                            <div>
                                <h4>GIFTS FOR KIDS</h4>
                                <Button className={a1.gift_btn} onClick={() => (data.filter(s1 => s1.name == "Gold" && viewPrdts(s1.id)))}>Shop Now</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12}>
                        <div className={a1.box_2}>
                            <div>
                                <h4>GIFTS FOR HER</h4>
                                <Button className={a1.gift_btn} onClick={() => (data.filter(s1 => s1.name == "Women" && viewPrdts(s1.id)))}>Shop Now</Button>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Section2

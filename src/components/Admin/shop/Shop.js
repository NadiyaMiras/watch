import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import a1 from '../product/product.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Shop = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api1/admin/categ_view.php').then(function (response) {
            setData(response.data)
        });
    }, []);
    const [shop, setShop] = useState({ shopId: "", shopName: "", locatn: "", categ: "", phNo: "", mail: "" });
    const shopDetails = (s1) => {
        const name1 = s1.target.name;
        const value1 = s1.target.value;
        setShop(shop => ({ ...shop, [name1]: value1 }))
    }
    const navigate = useNavigate();
    const submit = (s1) => {
        s1.preventDefault();
        axios.post('http://127.0.0.1:8080/api1/admin/shop_insert.php', shop).then(function (response) {
            navigate('/deleteShop');
        });
    }
    return (
        <React.Fragment>
            <div className={a1.product} >
                <Form className={a1.form} onSubmit={submit}>
                    <h5>Add Shop</h5>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Shop Id</Form.Label>
                                <Form.Control type="text" className={a1.input} name="shopId" value={shop.shopId} onChange={shopDetails} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Shop Name</Form.Label>
                                <Form.Control type="text" className={a1.input} name="shopName" value={shop.shopName} onChange={shopDetails} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Location</Form.Label>
                                <Form.Control type="text" className={a1.input} name="locatn" value={shop.locatn} onChange={shopDetails} />
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Category</Form.Label>
                                <Form.Select className={a1.input} name="categ" value={shop.categ} onChange={shopDetails}  >
                                    <option selected>Select</option>
                                    {data.map((s1) => (
                                        <option value={s1.id}>{s1.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Phone number</Form.Label>
                                <Form.Control type="text" className={a1.input} name="phNo" value={shop.phNo} onChange={shopDetails} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Email</Form.Label>
                                <Form.Control type="text" className={a1.input} name="mail" value={shop.mail} onChange={shopDetails} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" className={a1.submit_btn}>
                        Submit
                    </Button>
                </Form>
            </div>
        </React.Fragment>
    )
}

export default Shop

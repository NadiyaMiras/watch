import React, { useState, useEffect } from 'react';
import a1 from './product.module.css';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Product_edit_form = () => {
    const location = useLocation();
    const [values, setValue] = useState({ prdtName: location.state.name, price: location.state.price, desc: location.state.description, qty: location.state.quantity, shop: location.state.shop });
    const valueChange = (s1) => {
        const name1 = s1.target.name;
        const value1 = s1.target.value;
        setValue(values => ({ ...values, [name1]: value1 }))
    }
    const [image, setImage] = useState({ file: "" });
    const imgChange = (s1) => {
        let img = s1.target.files[0];
        setImage({ file: img })
    }
    const [data1, setData1] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api1/admin/shop_view.php').then(function (response) {
            setData1(response.data)
        });
    }, []);
    const navigate = useNavigate();
    const submit = (s1) => {
        s1.preventDefault();
        const formData = new FormData();
        formData.append('productName', values.prdtName);
        formData.append('productPrice', values.price);
        formData.append('productDesc', values.desc);
        formData.append('productQty', values.qty);
        formData.append('productShop', values.shop);
        formData.append('productImg', image.file);
        formData.append('id', location.state.id);
        axios.post('http://127.0.0.1:8080/api1/admin/product_edit_form.php', formData).then(function (response) {
            navigate('/editPrdt');
        });
    }
    return (
        <React.Fragment>
            <div className={a1.product}>
                <Form className={a1.form} onSubmit={submit}>
                    <h5>Update Product</h5>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Product Id</Form.Label>
                                <Form.Control type="text" className={a1.input} name='prdtId' defaultValue={location.state.id} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Product Name</Form.Label>
                                <Form.Control type="text" className={a1.input} name='prdtName' defaultValue={location.state.name} onChange={valueChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Price</Form.Label>
                                <Form.Control type="text" className={a1.input} name='price' defaultValue={location.state.price} onChange={valueChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Description</Form.Label>
                                <Form.Control type="text" className={a1.input} name='desc' defaultValue={location.state.description} onChange={valueChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Quantity</Form.Label>
                                <Form.Control type="text" className={a1.input} name='qty' defaultValue={location.state.quantity} onChange={valueChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Shop</Form.Label>
                                <Form.Select className={a1.input} name="shop" defaultValue={location.state.shop} onChange={valueChange}  >
                                    <option selected>Select</option>
                                    {data1.map((n1) => (
                                        <option value={n1.name}>{n1.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Image</Form.Label>
                                <Form.Control type="file" className={a1.input} name="prdtImg" onChange={imgChange} />
                                <img src={"http://127.0.0.1:8080/api1/ImageUploads/" + location.state.image} width="80" height="80" style={{ marginTop: '10px' }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" className={a1.submit_btn}>
                        Save changes
                    </Button>
                </Form>
            </div>
        </React.Fragment>
    )
}

export default Product_edit_form
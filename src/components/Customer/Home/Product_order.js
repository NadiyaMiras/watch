import React, { useState } from 'react';
import a1 from './product_order.module.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
const Product_order = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = useState({ custName: "", phNo: "", address: "", city: "", state: "", price: location.state.a1 })
    const orderDetails = (s1) => {
        const name1 = s1.target.name;
        const value1 = s1.target.value;
        setValue(value => ({ ...value, [name1]: value1 }))
    }
    const submit = (s1) => {
        s1.preventDefault();
        axios.post('http://127.0.0.1:8080/api1/customer/order_insert.php', value).then(function (response) {
            // console.log(response.data);
            navigate("/")
        });
    }
    return (
        <div className={a1.order}>
            <Form className={a1.form} onSubmit={submit}>
                <h5>Order Form</h5>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={a1.label}>Name</Form.Label>
                    <Form.Control type="text" className={a1.input} name='custName' value={value.custName} onChange={orderDetails} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={a1.label}>Phone number</Form.Label>
                    <Form.Control type="text" className={a1.input} name='phNo' value={value.phNo} onChange={orderDetails} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={a1.label}>Delivery Address</Form.Label>
                    <Form.Control type="text" className={a1.input} name='address' value={value.address} onChange={orderDetails} />
                </Form.Group>
                <Row>
                    <Col lg={6} sm={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={a1.label}>City</Form.Label>
                            <Form.Control type="text" className={a1.input} name='city' value={value.city} onChange={orderDetails} />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={a1.label}>State</Form.Label>
                            <Form.Select aria-label="Default select example" className={a1.input} name='state' value={value.orderId} onChange={orderDetails} >
                                <option selected>Select</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={a1.label}>Price</Form.Label>
                    <Form.Control type="text" className={a1.input} name='price' defaultValue={location.state.a1} onChange={orderDetails} disabled />
                </Form.Group>
                <Button variant="primary" type="submit" className={a1.submit_btn}>
                    Order Now
                </Button>
            </Form>
        </div>
    )
}

export default Product_order
import React, { useEffect, useState } from 'react';
import a1 from './product.module.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Product = () => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    useEffect(() => {
        if (data.length === 0) {
            axios.get('http://127.0.0.1:8080/api1/admin/categ_view.php').then(function (response) {
                setData(response.data)
            });
        }
        if (data1.length === 0) {
            axios.get('http://127.0.0.1:8080/api1/admin/shop_view.php').then(function (response) {
                setData1(response.data)
            });
        }
    }, []);
    const [prdt, setPrdt] = useState({ prdtId: "", prdtName: "", price: "", desc: "", qty: "", shop: "", categ: "" });
    const prdtDetails = (s1) => {
        const name1 = s1.target.name;
        const value1 = s1.target.value;
        setPrdt(prdt => ({ ...prdt, [name1]: value1 }))
    }
    const [image, setImage] = useState({ file: "" });
    const prdtImgUpload = (pImg) => {
        let img = pImg.target.files[0];
        setImage({
            file: img
        })
    }
    const navigate = useNavigate();
    const submit = (s1) => {
        s1.preventDefault();
        const formData = new FormData();
        formData.append('productId', prdt.prdtId);
        formData.append('productName', prdt.prdtName);
        formData.append('productPrice', prdt.price);
        formData.append('productDescript', prdt.desc);
        formData.append('productQuantity', prdt.qty);
        formData.append('productShop', prdt.shop);
        formData.append('productCateg', prdt.categ);
        formData.append('productImg', image.file);
        axios.post('http://127.0.0.1:8080/api1/admin/product_insert.php', formData).then(function (response) {
            navigate('/viewPrdt');
        });
    }
    return (
        <React.Fragment>
            <div className={a1.product} >
                <Form className={a1.form} onSubmit={submit}>
                    <h5>Add Product</h5>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Product Id</Form.Label>
                                <Form.Control type="text" className={a1.input} name="prdtId" value={prdt.prdtId} onChange={prdtDetails} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Product Name</Form.Label>
                                <Form.Control type="text" className={a1.input} name="prdtName" value={prdt.prdtName} onChange={prdtDetails} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Price</Form.Label>
                                <Form.Control type="text" className={a1.input} name="price" value={prdt.price} onChange={prdtDetails} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Description</Form.Label>
                                <Form.Control type="text" className={a1.input} name="desc" value={prdt.desc} onChange={prdtDetails} />
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Quantity</Form.Label>
                                <Form.Control type="text" className={a1.input} name="qty" value={prdt.qty} onChange={prdtDetails} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Shop</Form.Label>
                                <Form.Select className={a1.input} name="shop" value={prdt.shop} onChange={prdtDetails}  >
                                    <option selected>Select</option>
                                    {data1.map((n1) => (
                                        <option value={n1.name}>{n1.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className={a1.label}>Category</Form.Label>
                                <Form.Select className={a1.input} name="categ" value={prdt.categ} onChange={prdtDetails}  >
                                    <option selected>Select</option>
                                    {data.map((s1) => (
                                        <option value={s1.id}>{s1.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={a1.label}>Image</Form.Label>
                                <Form.Control type="file" className={a1.input} name="prdtImg" onChange={prdtImgUpload} />
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
export default Product;
import React, { useEffect, useState } from 'react';
import a1 from './product.module.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';
const Product_view = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api1/admin/product_view.php').then(function (response) {
            setData(response.data)
        });
    }, [])
    return (
        <React.Fragment>
            <div className={a1.table_box}>
                <h5>Product view</h5>
                <div className={a1.tableWrapper} style={{ padding: '25px' }}>
                    <Table striped bordered hover style={{ width: '100%', marginBottom: '0' }}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Shop</th>
                                <th>Category</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((s1) => (
                                <tr key={s1.id}>
                                    <td>{s1.id}</td>
                                    <td>{s1.name}</td>
                                    <td>{s1.price}</td>
                                    <td>{s1.description}</td>
                                    <td>{s1.quantity}</td>
                                    <td>{s1.shop}</td>
                                    <td>{s1.categoryId}</td>
                                    <td><img src={"http://127.0.0.1:8080/api1/ImageUploads/" + s1.image} width="60" height="60" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Product_view;
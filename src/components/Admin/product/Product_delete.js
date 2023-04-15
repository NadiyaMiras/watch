import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import a1 from './product.module.css';
const Product_delete = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api1/admin/product_view.php').then(function (response) {
            // console.log(response.data);
            setData(response.data)
        });
    }, [])
    const prdtDelete = (id) => {
        axios.get('http://127.0.0.1:8080/api1/admin/product_delete.php?name1=' + id).then(function (response) {
            window.location.reload();
        });
    }
    return (
        <React.Fragment>
            <div className={a1.table_box}>
                <h5>Product edit</h5>
                <div className={a1.tableWrapper} style={{ padding: '25px' }}>
                    <Table striped bordered hover style={{ width: '100%', marginBottom: "0" }}>
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
                                <th></th>
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
                                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: "center", height: "76px" }}>
                                        <Button className={a1.delete_btn} onClick={() => prdtDelete(s1.id)}>
                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Product_delete
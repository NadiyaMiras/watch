import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import a1 from '../product/product.module.css';
const Shop_delete = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api1/admin/shop_view.php').then(function (response) {
            // console.log(response.data);
            setData(response.data)
        });
    }, [])
    const shopDelete = (id) => {
        axios.get('http://127.0.0.1:8080/api1/admin/shop_delete.php?name1=' + id).then(function (response) {
            window.location.reload();
        });
    }
    return (
        <React.Fragment>
            <div className={a1.table_box}>
                <h5>Shop Delete</h5>
                <div className={a1.tableWrapper} style={{ padding: '25px' }}>
                    <Table striped bordered hover style={{ width: '100%', marginBottom: '0' }}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Category</th>
                                <th>Phone number</th>
                                <th>email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((s1) => (
                                <tr key={s1.id}>
                                    <td>{s1.id}</td>
                                    <td>{s1.name}</td>
                                    <td>{s1.location}</td>
                                    <td>{s1.category}</td>
                                    <td>{s1.phone_number}</td>
                                    <td>{s1.email}</td>
                                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: "center", height: "76px" }}>
                                        <Button className={a1.delete_btn} onClick={() => shopDelete(s1.id)}>
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

export default Shop_delete

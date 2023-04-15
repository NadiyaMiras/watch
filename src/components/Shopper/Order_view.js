import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import a1 from './order_view.module.css'
const Order_view = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api1/shop/order_view.php').then(function (response) {
            // console.log(response.data);
            setData(response.data)
        });
    }, [])
    const accept = (ph) => {
        axios.post('http://127.0.0.1:8080/api1/shop/status_accept.php?ph=' + ph).then(function (response) {
            window.location.reload();
        });
    }
    const reject = (ph) => {
        axios.post('http://127.0.0.1:8080/api1/shop/status_reject.php?ph=' + ph).then(function (response) {
            window.location.reload();
        });
    }
    return (
        <div className={a1.table_box}>
            <h5 >View Orders</h5>
            <div className={a1.tableWrapper} style={{ padding: '25px' }}>
                <Table striped bordered hover style={{ width: '100%', marginBottom: '0' }}>
                    <thead>
                        <tr>
                            <th>Customer name</th>
                            <th>Phone number</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((s1) => (
                            <tr key={s1.phone_number}>
                                <td>{s1.customer_name}</td>
                                <td>{s1.phone_number}</td>
                                <td>{s1.city}</td>
                                <td>{s1.state}</td>
                                <td>{s1.price}</td>
                                <td>{s1.status}</td>
                                <td style={{ textAlign: "center" }}>
                                    <Button className={a1.accept_btn} onClick={() => accept(s1.phone_number)}>
                                        Accept
                                    </Button>
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <Button className={a1.reject_btn} onClick={() => reject(s1.phone_number)}>
                                        Reject
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Order_view
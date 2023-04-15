import React, { useState, useEffect } from 'react';
import axios from 'axios';
import a1 from './status_view.module.css';
import { Table } from 'react-bootstrap'
const Order_status_view = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8080/api1/customer/order_status_view.php').then(function (response) {
      // console.log(response.data);
      setData(response.data);
    });
  }, [])
  return (
    <div className={a1.table_box}>
      <h5>Status</h5>
      <div style={{ padding: '25px' }}>
        <Table striped bordered hover style={{ width: '100%', marginBottom: '0' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((s1) => (
              <tr key={s1.phone_number}>
                <td>{s1.customer_name}</td>
                <td>{s1.phone_number}</td>
                <td>{s1.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Order_status_view
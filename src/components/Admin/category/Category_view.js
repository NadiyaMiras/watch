import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import a1 from './category.module.css';
import axios from 'axios';
const View_category = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get('http://127.0.0.1:8080/api1/admin/categ_view.php').then(function (response) {
            setData(response.data)
        });
    }
    return (
        <>
            <div className={a1.table_box}>
                <h5>Category view</h5>
                <div className={a1.tableWrapper}>
                    <Table striped bordered hover className={a1.table}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((s1) => (
                                <tr key={s1.id}>
                                    <td>{s1.id}</td>
                                    <td>{s1.name}</td>
                                    <td><img src={"http://127.0.0.1:8080/api1/ImageUploads/" + s1.image} width="60" height="60" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default View_category

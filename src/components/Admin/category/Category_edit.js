import React, { useState, useEffect } from 'react';
import axios from 'axios';
import a1 from './category.module.css'
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const Category_update = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api1/admin/categ_view.php').then(function (response) {
            setData(response.data)
        });
    }, [])
    const navigate = useNavigate();
    const categEdit = (id) => {
        axios.get('http://127.0.0.1:8080/api1/admin/categ_edit.php?name1=' + id).then(function (response) {
            navigate("/editFormCateg", { state: response.data[0] });
        });
    }
    return (
        <>
            <div className={a1.table_box}>
                <h5>Category edit</h5>
                <div className={a1.tableWrapper}>
                    <Table striped bordered hover className={a1.table}>
                        <thead >
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((s1) => (
                                <tr key={s1.id}>
                                    <td>{s1.id}</td>
                                    <td>{s1.name}</td>
                                    <td>
                                        <img src={"http://127.0.0.1:8080/api1/ImageUploads/" + s1.image} width="60" height="60" />
                                    </td>
                                    <td style={{ display: 'flex', justifyContent: "center", height: "76px" }}>
                                        <Button className={a1.delete_btn} onClick={() => categEdit(s1.id)}>
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Category_update
import React, { useState } from 'react';
import a1 from './category.module.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Category = () => {
    const [categ, setCateg] = useState({ categId: "", categName: "" })
    const categDetails = (s1) => {
        const name1 = s1.target.name;
        const value1 = s1.target.value;
        setCateg(categ => ({ ...categ, [name1]: value1 }));
    }
    const [image, setImage] = useState({ file: "" })
    const categImgUpload = (cImg) => {
        let img = cImg.target.files[0];
        setImage({
            file: img
        })
    }
    const navigate = useNavigate();
    const submit = (s1) => {
        s1.preventDefault();
        const formData = new FormData();
        formData.append('categoryId', categ.categId);
        formData.append('categoryName', categ.categName);
        formData.append('categoryImg', image.file);
        axios.post('http://127.0.0.1:8080/api1/admin/categ_insertion.php', formData).then(function (response) {
            navigate('/viewCateg');
        });
    }
    return (
        <div className={a1.category}>
            <Form className={a1.form} onSubmit={submit}>
                <h5>Add Category</h5>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={a1.label}>Category Id</Form.Label>
                    <Form.Control type="text" className={a1.input} name='categId' value={categ.categId} onChange={categDetails} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={a1.label}>Category Name</Form.Label>
                    <Form.Control type="text" className={a1.input} name='categName' value={categ.categName} onChange={categDetails} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={a1.label}>Image</Form.Label>
                    <Form.Control type="file" className={a1.input} name='categImg' onChange={categImgUpload} />
                </Form.Group>
                <Button variant="primary" type="submit" className={a1.submit_btn}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Category
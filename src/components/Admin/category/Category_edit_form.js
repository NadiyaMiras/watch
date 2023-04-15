import React, { useState } from 'react';
import a1 from './category.module.css';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Category_update_form = () => {
    const location = useLocation();
    const [values, setValue] = useState({ categName: location.state.name });
    const valueChange = (s1) => {
        const name = s1.target.name;
        const value = s1.target.value;
        setValue(values => ({ ...values, [name]: value }));
    }
    const [image, setImage] = useState({ file: "" });
    const imgChange = (s1) => {
        let img = s1.target.files[0];
        setImage({ file: img })
    }
    const navigate = useNavigate();
    const submit = (s1) => {
        s1.preventDefault();
        const formData = new FormData();
        formData.append('categoryName', values.categName);
        formData.append('categoryImg', image.file);
        formData.append('id', location.state.id);
        axios.post('http://127.0.0.1:8080/api1/admin/categ_edit_form.php?id=', formData).then(function (response) {
            navigate('/editCateg');
        });
    }
    return (
        <>
            <div className={a1.category}>
                <Form className={a1.form} onSubmit={submit}>
                    <h5>Update Category</h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={a1.label}>Category Id</Form.Label>
                        <Form.Control type="text" className={a1.input} name="categId" defaultValue={location.state.id} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={a1.label}>Category Name</Form.Label>
                        <Form.Control type="text" className={a1.input} name="categName" defaultValue={location.state.name} onChange={valueChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={a1.label}>Image</Form.Label>
                        <Form.Control type="file" className={a1.input} name="categImg" onChange={imgChange} />
                        <img src={"http://127.0.0.1:8080/api1/ImageUploads/" + location.state.image} width="80" height="80" style={{ marginTop: '20px' }} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className={a1.submit_btn}>
                        Save changes
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Category_update_form
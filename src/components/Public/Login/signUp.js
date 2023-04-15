import React, { useState } from 'react'
import a1 from './login.module.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Header from '../Home/Header';
const SignUp = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({ firstName: "", lastName: "", mail: "", psswrd: "", confirmPsswrd: "" })
    const signUp = (s1) => {
        const name1 = s1.target.name;
        const value1 = s1.target.value;
        setValue(value => ({ ...value, [name1]: value1 }))
    }
    const submit = (custReg) => {
        custReg.preventDefault();
        axios.post('http://127.0.0.1:8080/api1/public/signUp_insertion.php', value).then(function (response) {
            navigate('/publicHome');
            // console.log(response.data);
        });
    }
    return (
        <>
            <Header />
            <div className={a1.login_bg}>
                <div className={a1.box}>
                    <h5>Sign Up</h5>
                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={a1.label}>First name</Form.Label>
                            <Form.Control type="text" className={a1.input} name='firstName' value={value.firstName} onChange={signUp} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={a1.label}>Last name</Form.Label>
                            <Form.Control type="text" className={a1.input} name='lastName' value={value.lastName} onChange={signUp} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={a1.label}>Email</Form.Label>
                            <Form.Control type="email" className={a1.input} name='mail' value={value.mail} onChange={signUp} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={a1.label}>Password</Form.Label>
                            <Form.Control type="password" className={a1.input} name='psswrd' value={value.psswrd} onChange={signUp} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={a1.label}>Confrim password</Form.Label>
                            <Form.Control type="password" className={a1.input} name='confirmPsswrd' value={value.confirmPsswrd} onChange={signUp} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className={a1.btn}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default SignUp
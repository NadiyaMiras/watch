import React, { useState } from 'react'
import a1 from './login.module.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Header from '../Home/Header';
import { useDispatch } from 'react-redux';
import { loginValue } from '../../../redux-toolkit/loginReducer';
const Login = () => {
    const [value, setValue] = useState({ mail: "", password: "" })
    const login = (s1) => {
        const name1 = s1.target.name;
        const value1 = s1.target.value;
        setValue(value => ({ ...value, [name1]: value1 }))
    }
    const dispatch = useDispatch();
    const submit = (s1) => {
        s1.preventDefault();
        axios.post('http://127.0.0.1:8080/api1/public/login_insert.php', value).then(function (response) {
            // console.log(response.data);
            localStorage.setItem('loginValue', response.data[0].category);
            localStorage.setItem('user', JSON.stringify(response.data[0]));
            window.location.href = 'http://localhost:3000/';
            // if (response.data[0].category === "admin") {
            //     dispatch(loginValue({ category: response.data[0].category, id: response.data[0].id }));
            // }
            // if (response.data[0].category === "customer") {
            //     dispatch(loginValue({ category: response.data[0].category, id: response.data[0].id }))
            // }
            // if (response.data[0].category === "shop") {
            //     dispatch(loginValue({ category: response.data[0].category, id: response.data[0].id }))
            // }
        });
    }
    return (
        <>
            <Header />
            <div className={a1.login_bg}>
                <div className={a1.box}>
                    <img src={require('../../images/user.png')} />
                    <h5>Welcome</h5>
                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={a1.label}>Email Address</Form.Label>
                            <Form.Control type="email" className={a1.input} name="mail" value={value.mail} onChange={login} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={a1.label}>Password</Form.Label>
                            <Form.Control type="password" className={a1.input} name="password" value={value.password} onChange={login} />
                            <a href='forgotPsswrd' className={a1.forgot}>Forgot password?</a>
                        </Form.Group>
                        <Button variant="primary" type="submit" className={a1.btn}>
                            Submit
                        </Button>
                    </Form>
                    <p>Don't have an account?&nbsp;&nbsp;<a href='signUp' className={a1.signUp}>Sign up</a></p>
                </div>
            </div>
        </>
    )
}

export default Login;

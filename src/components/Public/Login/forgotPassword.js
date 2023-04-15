import React from 'react'
import a1 from './login.module.css';
import { Form, Button } from 'react-bootstrap';
import Header from '../Home/Header';
const forgotPassword = () => {
    return (
        <>
            <Header />
            <div className={a1.login_bg}>
                <div className={a1.forgot_box}>
                    <h5>Forgot password?</h5>
                    <p>No worries!Enter your email and we will send your reset</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={a1.label}>Email</Form.Label>
                            <Form.Control type="email" className={a1.input} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className={a1.btn}>
                            Send a request
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default forgotPassword
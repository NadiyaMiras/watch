import React from 'react'
import { Container } from 'react-bootstrap';
import a1 from './Error_page.module.css';
import Header from './Header';
import Footer from './Footer';
const Error_page = () => {
  return (
    <>
    <Header/>
    <div className={a1.error_page_wrapper}>
      <Container>
        <div className={a1.error_page}>
          <h1>404</h1>
          <h2>Oops, page not found</h2>
          <p>Sorry, but the requested page is not found.You might try another search</p>
        </div>
      </Container>
    </div>
    <Footer/>
    </>
  )
}

export default Error_page

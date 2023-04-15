import React from 'react';
import a1 from './footer.module.css';
import { Col, Container, Row } from 'react-bootstrap'
const Footer = () => {
  return (
    <div className={a1.footer}>
      <Container>
        <Row>
          <Col lg={3} md={3} sm={6} xs={12}>
            <h5>Customer Service</h5>
            <p>Service & Help</p>
            <p>Contact</p>
            <p>Telephone</p>
            <p>Post/Fax</p>
            <p>Chat</p>
            <p>Your opinion/ideas</p>
          </Col>
          <Col lg={3} md={3} sm={6} xs={12}>
            <h5>Simple shopping</h5>
            <p>Place your order</p>
            <p>Low cost delivery</p>
            <p>Shipping in 1-3 days</p>
            <p>Returns of free of charge</p>
            <p>e-points</p>
            <p>Payment by credit card & Paypal</p>
          </Col>
          <Col lg={3} md={3} sm={6} xs={12}>
            <h5>Online Advice</h5>
            <p>Size table</p>
            <p>Care instructions</p>
            <p>Material information</p>
            <p>Availability</p>
          </Col>
          <Col lg={3} md={3} sm={6} xs={12}>
            <h5>Contact Us</h5>
            <p>1800-263-1234</p>
            <p>customercare@demo.co.in</p>
            <p>Frequently askes questions</p>
          </Col>
        </Row>
        <div className={a1.footer_icons}>
          <a href='#'><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href='#'><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
          <a href='#'><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href='#'><i class="fa fa-snapchat-ghost" aria-hidden="true"></i></a>
        </div>
        <div className={a1.footer_bottom}>
          <p>© 2022 Titan Company Limited. All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer

import React from 'react'
import { Container, Card } from 'react-bootstrap'
import a1 from './section.module.css'
const Section3 = () => {
    return (
        <div className={a1.trending}>
            <Container>
                <h4 style={{ textAlign: 'center' }}>Trending Products</h4>
                <div className={a1.full_card}>
                    <Card style={{ width: '18rem' }} className={a1.card}>
                        <Card.Img variant="top" src={require('../../images/trending_watch_1.png')} className={a1.card_img} />
                        <Card.Body>
                            <Card.Text className={a1.card_content}>
                                Pebble Revo Smartwatch
                                <p>₹1100</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className={a1.card}>
                        <Card.Img variant="top" src={require('../../images/trending_watch_2.png')} className={a1.card_img} />
                        <Card.Body>
                            <Card.Text className={a1.card_content}>
                                Pebble Zen Pro Smart Watch
                                <p>₹1200</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className={a1.card}>
                        <Card.Img variant="top" src={require('../../images/trending_watch_3.png')} className={a1.card_img} />
                        <Card.Body>
                            <Card.Text className={a1.card_content}>
                                Pebble Prism Ultra Smartwatch
                                <p>₹1300</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className={a1.card}>
                        <Card.Img variant="top" src={require('../../images/trending_watch_4.jpg')} className={a1.card_img} />
                        <Card.Body>
                            <Card.Text className={a1.card_content}>
                                Pebble Full Touch Zen Smartwatch
                                <p>₹1400</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default Section3

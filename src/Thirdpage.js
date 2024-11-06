import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import image from './img1.png';
import image1 from './img2.png';
import image3 from './img3.png';
import image4 from './img4.png';
import ListGroup from 'react-bootstrap/ListGroup';
const Thirdpage = () => {
    return (
        <Container style={{ height: "100vh" }}>
            <Row>
                <Col xs={0} md={3} xl={4} lg={4}>
                </Col>
                <Col xs={12} md={3} xl={4} lg={4}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span>Digital Products</span>
                    </div>
                    <hr style={{ marginTop: '10px', width: '100%', border: '2px solid #000', marginBottom: '30px' }} />
                    <div style={{ marginBottom: '10px' }}>
                        <img className='img-cls'
                            // style={{width:'400px', height:'350px'}}
                            src={image} alt='good'></img>

                    </div>
                    <strong >Urban Classics vintage flared jeans in midstone washed</strong>
                    <div style={{ marginBottom: '10px', marginTop: "20px" }}>
                        <img className='img-cls'
                            src={image1} alt='bad'></img>
                    </div>
                    <strong>Urban Classics vintage flared jeans in midstone washed</strong>
                    <div style={{ marginBottom: '10px', marginTop: '20px' }}>
                        <img className='img-cls'
                            src={image3} alt='goodbad'></img>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px', paddingLeft: '20px' }}>
                        <img src={image4} alt='badd'></img> <span>Amos Burton</span>
                    </div>
                    <Card style={{ marginBottom: '15px' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <span >Wedding Photographer in London</span> <br />
                                <Button style={{ paddingLeft: '30px', width: '50%', height: '35px', marginTop: "10px" }} variant="dark">$1495.00</Button>
                                <br />
                                <span style={{ paddingBottom: '20px' }}>I have worked with several lovely couples getting married in the past and I always put my heart...</span>
                                <div style={{ marginTop: '10px' }}></div>
                            </ListGroup.Item>
                            <ListGroup.Item >
                                <Row>
                                    <Col xs={9} lg={10} xl={10}>
                                        <span>Aerial drone footage</span>
                                    </Col>
                                    <Col xs={3} lg={2} xl={2}>
                                        <span>YES</span>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col xs={8} lg={10} xl={10}>
                                        <span>Express turn around</span>
                                    </Col>
                                    <Col xs={4} lg={2} xl={2}>
                                        <span>14 days</span>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <strong >Benefits</strong>
                    <Card style={{ marginTop: '20px' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item >
                                <span >Actionable tips: I give you actionable tips & teach you how to do SEO</span>
                                <div style={{marginTop:'10px'}}></div>
                            </ListGroup.Item>
                            <ListGroup.Item>Learn WHY:Most SEO resources teaches you how to do things.I cover both HOW and WHY.
                                <div style={{marginTop:'10px'}}></div>
                            </ListGroup.Item>
                            <ListGroup.Item>From Beginner to Advanced SEO:I cover SEO activities both for beginners and advanced SEO
                                <div style={{marginTop:"10px"}}></div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Button style={{marginTop:'40px',width:'100%'}}>Buy for $199</Button>
                </Col>
                <Col xs={0} md={3} xl={4} lg={4} >
                </Col>
            </Row>
        </Container>
    )
}

export default Thirdpage

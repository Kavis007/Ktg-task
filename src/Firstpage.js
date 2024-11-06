import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button, Card, Col, Container, FormControl, Row } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Firstpage = () => {
    const [userdata, setUserdata] = useState({
        name: "",
        descr: "",
        price: ""
    })
    const navi1=useNavigate();
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const handleClick = () => {
        fileInputRef.current.click();
    };
    const handleChange = (e) => {
        setUserdata((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            console.log('Selected file:', file);  // Optional: Handle the file (e.g., upload)
        }
    };
    const gotonextpage=()=>{
        navi1('Secondpage')
    }

    return (
        <Container style={{ height: '100vh' }}>
            <Row>
                <Col xs={0} md={3} lg={4} xl={4}>

                </Col>
                <Col xs={12} md={3} lg={4} xl={4} >
                     <div >
                           
                           <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                           <span>About</span>
                           </div>
                            <hr style={{ marginTop: '10px', width: '100%', border: '1px solid #000', marginBottom: '0' }} />
                        </div>
                    <div className='maindiv'>
                        

                        <Form.Control
                            style={{ width: '100%', marginBottom: '30px', marginTop: "30px", backgroundColor: 'lightgrey' }}
                            type="text"
                            name='name'
                            value={userdata.name}
                            placeholder='Name'
                            onChange={handleChange}
                        />

                        <Form.Control
                            as="textarea"
                            style={{ width: '100%', height: '100px', marginBottom: '30px', backgroundColor: 'lightgrey' }}
                            type="text"
                            name='descr'
                            value={userdata.descr}
                            placeholder="Description"
                            onChange={handleChange}
                        />
                        <div style={{ paddingRight: '80%', marginBottom: '5%' }}>
                            <div><strong>Cover</strong></div>
                            <div><strong>Photos</strong></div>
                        </div>
                        {/* <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Col lg={4} style={{ padding: '0 10px' }}>
                                <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', width: '100%' }}>
                                    <span style={{ fontSize: '40px', color: 'blue' }}>+</span>
                                </Card>
                            </Col>
                            <Col lg={4} style={{ padding: '0 10px' }}>
                                <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', width: '100%' }}>
                                    <span style={{ fontSize: '40px', color: 'blue' }}>+</span>
                                </Card>
                            </Col>
                            <Col lg={4} style={{ padding: '0 10px' }}>
                                <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', width: '100%' }}>
                                    <span style={{ fontSize: '40px', color: 'blue' }}>+</span>
                                </Card>
                            </Col>
                        </Row> */}
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '5%' }}>
                            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90px', width: '30%' }}>
                                <span style={{ fontSize: '40px', color: 'blue' }}
                                    onClick={handleClick}
                                >+</span>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </Card>
                            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90px', width: '30%' }}>
                                <span style={{ fontSize: '40px', color: 'blue' }}
                                    onClick={handleClick}
                                >+</span>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </Card>
                            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90px', width: '30%' }}>
                                <span style={{ fontSize: '40px', color: 'blue' }}
                                    onClick={handleClick}
                                >+</span>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </Card>
                        </div>
                        <div style={{ paddingRight: '80%', marginBottom: '5%' }}>
                            <strong>Price</strong>
                        </div>
                        <Form.Control style={{ height: '50%', backgroundColor: 'lightgrey' }} type="text" name="price" value={userdata.price} placeholder="$0.00" />
                        <Button onClick={gotonextpage}style={{ width: '100%', marginTop: '20%' }}>Next</Button>





                    </div>
                </Col>
                <Col xs={0} md={3} lg={4} xl={4} >
                </Col>
            </Row>


        </Container>
    );
};

export default Firstpage;

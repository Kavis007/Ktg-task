import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'; 
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
const Secondpage = () => {
    const [inputFields, setInputFields] = useState(['', '']);
    const [keyValuePairs, setKeyValuePairs] = useState([{ key: '', value: '' }]);
     const navi2=useNavigate();
    const addinput = () => {
        setInputFields([...inputFields, '']);
    };

    const addInput = () => {
        setInputFields([...inputFields, '']);
    };

    const handleInputChange = (index, event) => {
        const newInputFields = [...inputFields];
        newInputFields[index] = event.target.value; 
        setInputFields(newInputFields); 
    };

    const handleInputChange1 = (index, type, event) => {
        const newKeyValuePairs = [...keyValuePairs];
        newKeyValuePairs[index][type] = event.target.value; 
        setKeyValuePairs(newKeyValuePairs); 
    };

    const handleDelete = (index) => {
        const newInputFields = inputFields.filter((_, i) => i !== index); 
        setInputFields(newInputFields); 
    };

    const handleDelete1 = (index) => {
        const newKeyValuePairs = keyValuePairs.filter((_, i) => i !== index); 
        setKeyValuePairs(newKeyValuePairs);
    };

    const additionaldetail = () => {
        setKeyValuePairs([...keyValuePairs, { key: '', value: '' }]);
    };

    const gotothirdpage=()=>{
        navi2('/Thirdpage')
    }
    return (
        <Container style={{ height: '100vh' }}>
            <Row>
                <Col xs={0} md={3} lg={4} xl={4} ></Col>
                <Col xs={12} md={6} lg={4} xl={4}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span>additional details</span>
                    </div>
                    <hr style={{ marginTop: '10px', width: '100%', border: '2px solid #000', marginBottom: '30px' }} />
                    <div>
                        <Row>
                            <Col xs={10} lg={10} xl={10} style={{ marginBottom:'30px'}}>
                                <strong>Benefits</strong>
                            </Col>
                            <Col xs={2} lg={2} xl={2} >
                                <span
                                    onClick={addinput}
                                    style={{ color: 'blue', cursor: 'pointer', marginTop: '10px' }}
                                >
                                    +Add
                                </span>
                            </Col>
                        </Row>
                        {inputFields.map((value, index) => (
                            <div key={index} style={{ marginBottom: '30px' }}>
                                <Form.Control
                                    style={{ backgroundColor: 'lightgrey' }}
                                    type="text"
                                    name="benefits"
                                    value={value}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                                {index >= 2 && (
                                    <span
                                        onClick={() => handleDelete(index)}
                                        style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}
                                    >
                                        <BsTrash />
                                    </span>
                                )}
                            </div>
                        ))}

                        <Row>
                            <Col xs={10} lg={10} xl={10}>
                                <strong>Additional details</strong>
                            </Col>
                            <Col xs={2} lg={2} xl={2}>
                                <span
                                    onClick={additionaldetail}
                                    style={{ color: 'blue', cursor: 'pointer', marginTop: '10px' }}
                                >
                                    +Add
                                </span>
                            </Col>
                        </Row>
                        {keyValuePairs.map((pair, index) => (
                            <div key={index} style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* Input for Key */}
                                    <Form.Control
                                        type="text"
                                        placeholder="Key"
                                        value={pair.key}
                                        onChange={(e) => handleInputChange1(index, 'key', e)}
                                        style={{ marginRight: '10px', width: '50%', backgroundColor: 'lightgray' }}
                                    />
                                    {/* Input for Value */}
                                    <Form.Control
                                        type="text"
                                        placeholder="Value"
                                        value={pair.value}
                                        onChange={(e) => handleInputChange1(index, 'value', e)}
                                        style={{ marginRight: '10px', width: '50%', backgroundColor: 'lightgray' }}
                                    />
                                    {/* Delete Icon */}
                                    {index > 0 && (
                                        <span
                                            onClick={() => handleDelete1(index)}
                                            style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}
                                        >
                                            < BsTrash />
                                        </span>
                                    )}

                                </div>
                            </div>
                        ))}
                        <Dropdown style={{marginBottom:'50px'}}>
                            <Dropdown.Toggle style={{backgroundColor:'lightgrey',color:'black'}} >
                                Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Action</Dropdown.Item>
                                <Dropdown.Item >Another action</Dropdown.Item>
                                <Dropdown.Item >Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button  onClick={gotothirdpage}style={{width:'100%'}}>Next</Button>
                    </div>

                </Col>
                <Col xs={0} md={3} lg={4} xl={4} ></Col>
            </Row>
        </Container>
    );
};

export default Secondpage;

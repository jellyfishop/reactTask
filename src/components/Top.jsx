import React from 'react'
import './Top.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Top() {
  return (

   
 <div className='form'>
 <Row className="mt-5 w-80 container">
        <Form.Group as={Col} controlId="formGridEmail">
         
          <Form.Control type="" placeholder="ORDER LIST ID" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          
          <Form.Control type="" placeholder="BUILDING ID" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          
          <Form.Control type="" placeholder="BUILDING NAME" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          
          <Form.Control type="" placeholder="BUILDING ADDRESS" />
        </Form.Group>
      </Row>
      <div>
        <Row className='w-35 container mt-3'>
        <Form.Group as={Col} controlId="formGridEmail">
          
          <Form.Control type="" placeholder="ORDER DESCRPITION" />
        </Form.Group>
        </Row>
      </div>
      
 </div>

  

  )
}

export default Top
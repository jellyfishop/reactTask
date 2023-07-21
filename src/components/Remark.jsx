import React from 'react'
import { Col, Row ,Form ,Button } from 'react-bootstrap'
import './Remark.css'


function Remark() {
  return (
    <div className='remark'>
         <div>
        <Row className='w-35 container mt-3'>
        <Form.Group as={Col} controlId="formGridEmail">
          
          <Form.Control type="" placeholder="REMARKS" />
        </Form.Group>
        </Row>
      </div>
      <Row className="mt-5 w-50 container">
        <Form.Group as={Col} controlId="formGridEmail">
         
          <Form.Control type="" placeholder="PREP BY" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          
          <Form.Control type="" placeholder="CHK BY" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          
          <Form.Control type="" placeholder="APPROVED BY" />
        </Form.Group>

       
       
      </Row>
      <Row className="mt-5 w-50 container">
        <Form.Group as={Col} controlId="formGridEmail">
        
         
          <Form.Control type="" placeholder="DATE" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          
          <Form.Control type="" placeholder="DATE" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          
          <Form.Control type="" placeholder="DATE" />
        </Form.Group>

       
       
      </Row>
      <div className='buttons'>
        
      <Button className='b1' variant="primary">SEND FOR CHECK</Button>{' '}
      <Button className='b2' variant="primary">SEND FOR APP</Button>{' '}
      <Button className='b3' variant="primary">APPROVE</Button>{' '}

      <Button className='b6 me-4' variant="primary">DELETE</Button>{' '}
      <Button className='b7 me-4' variant="primary">CANCEL</Button>{' '}
      <Button className='b8' variant="primary">SAVE</Button>{' '}
      </div>
    
     
      </div>

    
    
  )
}

export default Remark
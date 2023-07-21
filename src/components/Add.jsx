import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar,Container,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useNavigate ,Link} from 'react-router-dom';
import uuid from 'react-uuid';






function Add() {
  const [uid,setuid]=useState('')
  const [itemno,setItemno]=useState(0)
  const [mid,setMid]=useState('')
  const [desc,setDesc]=useState('')
  const [cqty,setCqty]=useState(0)
  const [pqty,setPqty]=useState(0)
  const [diff,setQdiff]=useState(0)
  const [comment,setComment]=useState('')

  useEffect(()=>{
    setuid(uuid().slice(0,3))
  },[])

  let location=useNavigate()


const addMaterial=async(e)=>{
  e.preventDefault()
  setuid(uuid().slice(0,3));

  const body={
    uid,
    itemno,
    mid,
    desc,
    cqty,
    pqty,
    diff,
    comment
  }
 const result=await axios.post('http://localhost:8000/addMaterial',body)
alert(result.data.message)
location('/')
}


  return (
    <div>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">ADD MATERIALS</Navbar.Brand>
          
        </Container>
      </Navbar>
      <Form className='p-5 mt-5 w-75 container'>

      <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Item no</Form.Label>
        <Form.Control onChange={(e)=>setItemno(e.target.value)} type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Material id</Form.Label>
        <Form.Control onChange={(e)=>setMid(e.target.value)} type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDesc(e.target.value)} type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Current quantity</Form.Label>
        <Form.Control onChange={(e)=>setCqty(e.target.value)} type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Previuos quantity</Form.Label>
        <Form.Control onChange={(e)=>setPqty(e.target.value)} type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Difference</Form.Label>
        <Form.Control onChange={(e)=>setQdiff(e.target.value)} type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Comments</Form.Label>
        <Form.Control onChange={(e)=>setComment(e.target.value)} type="text" placeholder="" />
      </Form.Group>

      <Button onClick={(e)=>addMaterial(e)} className='ms-5' variant="info">Add</Button>

      <Link to={'/'}>
      <Button className='ms-5' variant="primary">Cancel</Button>

      </Link>
      
    </Form>

    </div>
  )
}

export default Add
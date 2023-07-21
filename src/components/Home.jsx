import axios from 'axios';
import { React, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Remark from './Remark';
import Top from './Top';






function Home() {

  const [allMaterials, setAllMaterials] = useState([])
  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/getAllMaterial')
    setAllMaterials(result.data.materials);
  }

  const handleDelete=async(uid)=>{
    const result=await axios.delete('http://localhost:8000/deleteMaterial/'+uid)
    alert(result.data.message)
    fetchData()
  }

  console.log(allMaterials);
  useEffect(() => {
    fetchData()
  }, [])


  return (
    

    <div>
            


           <Top></Top>

      <div className='text-end mt-2 me-4'>
        <Link to={'/add'}>
          <Button variant='success'>ADD</Button>
        </Link>
      </div>
      <Table className='w-80 container border mt-2' striped bordered hover>
        <thead>
          <tr>
            <th>UID</th>
            <th>Item No</th>
            <th>Material ID</th>
            <th>Description</th>
            <th>Current QTY</th>
            <th>Previous QTY</th>
            <th>QTY Diff</th>
            <th>Order comments</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {
            allMaterials?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.itemno}</td>
                <td>{item.mid}</td>
                <td>{item.desc}</td>
                <td>{item.cqty}</td>
                <td>{item.pqty}</td>
                <td>{item.diff}</td>
                <td>{item.comment}</td>
                <td>
                  <Button onClick={()=>handleDelete(item.uid)} className='button' variant='danger'><i class="fa-solid fa-trash"></i></Button>
                </td>
              </tr>

            ))


          }




        </tbody>
      </Table>
      <Remark></Remark>

    </div>
    
  )
}

export default Home
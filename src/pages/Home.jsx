import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { product } from './product';
import Customnav from './customnavber'
import './pagecss/home.css'
import { Shoecontext } from '../App'
import { useNavigate } from 'react-router-dom';

function BasicExample() {
  const navigate = useNavigate()
  const {shoe , setshoe} = useContext(Shoecontext)
  const handleproduct = (event) => {
    setshoe([...shoe, event]);
    navigate('/ADD')
  }
  return (

    <div className='body'>
    <Customnav/>

    <div className='backgroudimage'>
      <h1 className='h2'>Love the Planet <br /> we walk on</h1>
    </div>

      {/* <div style={{ display: "flex", justifyContent: "center" , flexWrap:"wrap"}}>
    {
      product.map((e)=>(
        <div style={{ margin: "1rem" }} key={e.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button onClick={()=>handleproduct(e)} variant="primary">ADD Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))
    }
      </div> */}
    </div>
  );
}

export default BasicExample;
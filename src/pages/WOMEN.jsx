import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { product } from './product';
import './pagecss/index.css';
import { Shoecontext } from '../App'
import { useNavigate } from 'react-router-dom';

function WOMEN() {
  const filteredProducts = product.filter((e) => e.id >= 7);
  const navigate = useNavigate()
  const {shoe , setshoe} = useContext(Shoecontext)
  const handleproduct = (event) => {
    setshoe([...shoe, event]);
    navigate('/ADD')
  }
  return (
    <>
      <h1 className='h1'>WOMEN</h1>
      <div style={{ display: "flex", justifyContent: "center" , flexWrap:"wrap"}}>
        {filteredProducts.map((e) => (
          <div style={{ margin: "1rem" }} key={e.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e.image} />
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={()=>handleproduct(e)}>ADD Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default WOMEN;

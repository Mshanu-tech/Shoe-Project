import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { product } from './product';
// import './pagecss/index.css';
import { Shoecontext } from '../App'
import { useNavigate } from 'react-router-dom';

function MEN() {

  const H1 = {
    fontSize: "5.5rem",
    fontWeight: 'bold',
      margin: "78px"
  }

  const filteredProducts = product.filter((e) => e.id <= 7);
  const {shoe , setshoe} = useContext(Shoecontext)
  const navigate = useNavigate()

  const handleproduct = (e) => {
    navigate('/View',{state:{id:e.id , name:e.name, price:e.price, image:e.image, genter:e.genter}})
    // console.log(e.id);
    // setshoe([...shoe, event]);
    // navigate('/ADD')
  }

  // console.log(shoe)
  return (
    <>
      <h1 style={H1}>MEN</h1>
      <div style={{ display: "flex", justifyContent: "center" , flexWrap:"wrap"}}>
        {filteredProducts.map((e) => (
          <div style={{ margin: "1rem" }} key={e.id}>
            <Card style={{ width: '18rem' }} onClick={()=>handleproduct(e)}>
              <Card.Img variant="top" src={e.image} />
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                {/* <Button onClick={()=>handleproduct(e)}  variant="primary">ADD Cart</Button> */}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default MEN;

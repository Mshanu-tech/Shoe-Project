import React, { useContext } from 'react'
import { Shoecontext } from '../App'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './pagecss/index.css'
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addproduct() { 
    const {shoe , setshoe} = useContext(Shoecontext)

    const removeproduct = (id) => {
      const updatedShoe = shoe.filter((item) => item.id !== id);
      setshoe(updatedShoe);
      toast("Product removed successfully")
    };

  return (
    <>
    <h1>Cart</h1>
     <div style={{ display: "flex", justifyContent: "center" , flexWrap:"wrap"}}>
        {shoe.map((e) => (
          <div style={{ margin: "1rem" }} key={e.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e.image} />
              <Card.Body> 
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button onClick={()=>handleproduct(e)}  variant="primary">BUY</Button>
                <Button onClick={()=>removeproduct(e.id)}  variant="primary">remove</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <ToastContainer/>
    </>
  )
  }

export default Addproduct


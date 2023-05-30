import React, { useContext } from 'react'
import { Shoecontext } from '../App'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './pagecss/index.css';

function Addproduct() { 
    const {shoe , setshoe} = useContext(Shoecontext)

    const removeproduct = (id) => {
      const updatedShoe = shoe.filter((item) => item.id !== id);
      setshoe(updatedShoe);
    };

    // const handleproduct = (e) =>{
    //   e.preventDefault()
    //   const q=e.qu
    //   const qu = q-1
    //   console.log(q);
    //   console.log(qu)
    // }
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
    </>
  )
  }

export default Addproduct


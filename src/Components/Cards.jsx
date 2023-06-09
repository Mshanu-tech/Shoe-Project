import React from 'react'
import Card from 'react-bootstrap/Card';

function Cards({image, name, price, handlecards}) {
// console.log(image,name,price);

  return (
    <>
     <Card style={{ width: '18rem' }} onClick={handlecards}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
    </>
  )
}

export default Cards
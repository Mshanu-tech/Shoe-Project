import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import style from './style/viewproduct.module.css'

function Viewproduct() {
  const location = useLocation();
  return (
    <>
      <div className={style.main}>
        <Card style={{ width: '50rem', flexDirection: 'row' }}>
          <Card.Img variant="top" src={location.state.image} />
          <Card.Body className={style.viewproduct}>
            <Card.Title>Name: {location.state.name}</Card.Title>
            <Card.Title>Price: {location.state.price}</Card.Title>
            <Card.Title>{location.state.genter}</Card.Title>
            <Card.Text>
              The Moonstone is a simple but distinctive ladies social shoe, it features a closed toe, an ankle strap and a T-bar.
            </Card.Text>
 <div className={style.viewbutton}>
              <Button variant="primary">Buy</Button>
              <Button variant="primary">ADD Cart</Button>
              </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Viewproduct;

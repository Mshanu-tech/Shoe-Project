import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { BsCartCheck,BsCartCheckFill,BsBalloonHeart, BsBalloonHeartFill } from "react-icons/bs";
import style from './carts.module.css'

function Cards({ image, name, price, handlecards }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const handleFavoriteToggle = () =>{
    setIsFavorite(!isFavorite);
  }
  const handleCart = () =>{
    setIsCart(!isCart)
  }
  return (
    <>
      <Card style={{ maxWidth: '16rem' }} >
      <Card.Img variant="top" src={image} onClick={handlecards}/>
      <div>
      {
        isFavorite ?(
          <BsBalloonHeart onClick={handleFavoriteToggle} className={style.Favoriteicon}/>
        ):(
        <BsBalloonHeartFill onClick={handleFavoriteToggle} className={style.Favoriteicon}/>
        )
      }
      {
        isCart ?(
          <BsCartCheck className={style.Carticon} onClick={handleCart}/>
        ):(
          <BsCartCheckFill className={style.Carticon} onClick={handleCart}/> 
        )
      }
</div>
        <Card.Body onClick={handlecards}>
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

export default Cards;

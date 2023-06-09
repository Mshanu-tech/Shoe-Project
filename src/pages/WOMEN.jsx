import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { product } from './product';
import Cards from '../Components/Cards';
import { Shoecontext } from '../App'
import { useNavigate } from 'react-router-dom';

function WOMEN() {

  const H1 = {
    fontSize: "5.5rem",
    fontWeight: 'bold',
      margin: "78px"
  }
  const filteredProducts = product.filter((e) => e.id >= 7);
  const navigate = useNavigate()
  const {shoe , setshoe} = useContext(Shoecontext)
  const handlecard = (e) => {
    navigate('/View',{state:{id:e.id , name:e.name, price:e.price, image:e.image, genter:e.genter}})
  }
  return (
    <>
      <h1 style={H1}>WOMEN</h1>
      <div style={{ display: "flex", justifyContent: "center" , flexWrap:"wrap"}}>
        {filteredProducts.map((e) => (
          <div style={{ margin: "1rem" }} key={e.id}>
            <Cards image={e.image} name={e.name} price={e.price} handlecards={()=>handlecard(e)}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default WOMEN;

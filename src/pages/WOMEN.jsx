import React, { useContext } from 'react';
import Customnavbar from './customnavber'
import Filter from '../Components/Filter';
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
    <Customnavbar/>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", background: "aquamarine" }}>
          <Filter/>
        <div className='container'>
          <div className='row' style={{ display: "flex", justifyContent: "space-between" }}>
            {filteredProducts.map((e) => (
              <div className="col-sm-12 col-md-4 col-lg-3 g-4" style={{ margin: "1rem" }} key={e.id}>
                <Cards image={e.image} name={e.name} price={e.price} handlecards={() => handlecard(e)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
    </>
  );
}

export default WOMEN;

import React, { useState } from 'react';
import { product } from './product';
import Cards from '../Components/Cards';
import { useNavigate } from 'react-router-dom';
import Customnavbar from './customnavber';
import Filter from '../Components/Filter'

function MEN() {
  const filteredProducts = product.filter((e) => e.id <= 7);

  const navigate = useNavigate();
  const handlecard = (e) => {
    navigate('/View', {
      state: { id: e.id, name: e.name, price: e.price, image: e.image, genter: e.genter }
    });
  }

  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
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
              <div className="col-sm-12 col-md-4 col-lg-3 g-4" style={{ margin: "1rem" ,display:"flex" , justifyContent:"center" }} key={e.id}>
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

export default MEN;

import React, { useState } from 'react';
import { product } from './product';
import Cards from '../Components/Cards';
import { useNavigate } from 'react-router-dom';
import Customnavbar from './customnavber';
import Filter from '../Components/Filter'
import style from './men.module.css'


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
<Filter/>
      <div style={{ width: "100%" }}>
        <div className={style.main}>
      <div className='container'>
          <div className={`row ${style.row}`}>
            {filteredProducts.map((e) => (
              <div className={`col-sm-12 col-md-4 col-lg-3 g-4 ${style.card}`}  key={e.id}>
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

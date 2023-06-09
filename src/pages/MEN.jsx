import React, { useContext } from 'react';
import { product } from './product';
import Cards from '../Components/Cards';
import { Shoecontext } from '../App';
import { useNavigate } from 'react-router-dom';

function MEN() {
  const filteredProducts = product.filter((e) => e.id <= 7);
  const { shoe, setshoe } = useContext(Shoecontext);
  const navigate = useNavigate();

  const handlecard = (e) => {
    navigate('/View', {
      state: {
        id: e.id,
        name: e.name,
        price: e.price,
        image: e.image,
        genter: e.genter
      }
    });
  }

  return (
    <>
      <h1>MEN</h1>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", background: "aquamarine" }}>
          <div style={{ flex: "0 0 280px", maxWidth: "280px", padding: "0px 10px 0px 0px" }}>
            <div>
              <h1>Filters</h1>
              <hr />
              <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Price</p>

              <section style={{ padding: "16px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-around" }}>
                <select name="" id="">
                  <option value="">Min</option>
                  <option value="">100</option>
                  <option value="">200</option>
                </select>
                <select name="" id="">
                  <option value="5000">Max</option>
                  <option value="5000">5000</option>
                  <option value="4000">4000</option>
                  <option value="3000">3000</option>
                  <option value="2000">2000</option>
                </select>
              </section>

              <section style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
                <h6 style={{ fontWeight: "bold", paddingLeft: "10px" }}>Color</h6>
                <input type="radio" value="Red" name="gender" /> Red
                <input type="radio" value="Black" name="gender" /> Black
                <input type="radio" value="White" name="gender" /> White
                <input type="radio" value="Blue" name="gender" /> Blue
              </section>

              <section style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
                <p style={{ fontWeight: "bold", padding: "0px 20px 0px 20px", display: "inline" }}>Size</p>
                <input type="number" style={{ maxWidth: "60px" }} />
              </section>

              <section style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>BRAND</p>
                <select multiple={true} style={{ height: "120px" }}>
                  <option value="Brand1">Brand 1</option>
                  <option value="Brand2">Brand 2</option>
                  <option value="Brand3">Brand 3</option>
                  {/* Add more options as needed */}
                </select>
              </section>
            </div>
          </div>
          <div className='container'>
            <div className='row' style={{ display: "flex", justifyContent: "space-evenly" }}>
              {filteredProducts.map((e) => (
                <div className="col-sm-12 col-md-4 col-lg-3 g-4" style={{ margin: "1rem" }} key={e.id}>
                  <Cards image={e.image} name={e.name} price={e.price} handlecards={() => handlecard(e)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MEN;

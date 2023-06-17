import React from 'react'
import Dropdown from './Dropdown';

function Filter() {
  return (
    <>
    <div className='leftside'>
            <div style={{position: "sticky",top:"0px"}}>
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
                <input style={{ margin: "3px" }} type="radio" value="Red" name="gender" /> Red
                <input style={{ margin: "3px" }} type="radio" value="Black" name="gender" /> Black
                <input style={{ margin: "3px" }} type="radio" value="White" name="gender" /> White
                <input style={{ margin: "3px" }} type="radio" value="Blue" name="gender" /> Blue
              </section>

              <Dropdown title="Size" options={[2,4,5,6,7,3]}/>

              <Dropdown title="Brand" options={['NIKE', 'Bata', 'Woodland', 'Puma']}/>

              <Dropdown title="Occasion" options={['Casual', 'Party', 'Wedding']}/>

              <Dropdown title="Discount" options={['50%', '25%', '10%']}/>
              
          </div>
        </div>
    </>
  )
}

export default Filter

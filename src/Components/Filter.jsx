import React from 'react'
import Dropdown from './Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Filter() {
  return (
    <>
      <Navbar expand="lg" variant="pills" defaultActiveKey="/home">
      <Container>
      <Nav.Item>
            <Dropdown title="Occasion" options={['Casual', 'Party', 'Wedding']} />
          </Nav.Item>
          <Nav.Item>
            <Dropdown title="Occasion" options={['Casual', 'Party', 'Wedding']} />
          </Nav.Item>
          <Nav.Item>
            <Dropdown title="Occasion" options={['Casual', 'Party', 'Wedding']} />
          </Nav.Item>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >

          <Nav.Item>
            <Dropdown title="Brand" options={['NIKE', 'Bata', 'Woodland', 'Puma']} />
          </Nav.Item>
          <Nav.Item>
            <Dropdown title="Discount" options={['50%', '25%', '10%']} />
          </Nav.Item>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className='leftside' style={{position: "sticky",top:"0px"}}>
            <div >
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
              
              <section >
              <Dropdown title="Size" options={[2,4,5,6,7,3]}/>

             
              <Dropdown title="Occasion" options={['Casual', 'Party', 'Wedding']}/>

             
              </section>              
          </div>
        </div> */}
    </>
  )
}

export default Filter

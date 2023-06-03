import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logout } from '../api/user';
import { Link } from 'react-router-dom';
import { isLoggedin } from '../api/user';
import './pagecss/home.css'


function CollapsibleExample() {
  return (
    <div style={{position:"sticky"}}>
<Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand className='head' as={Link} to="/">PLASHOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto custom-nav">
            <Nav.Link as={Link} to="/MEN">MEN</Nav.Link>
            <Nav.Link as={Link} to="/WOMEN">WOMEN</Nav.Link>
          </Nav>
          <Nav className="me-auto custom-nav">
          <Nav.Link as={Link} to="/ADD">Cart<Badge bg="primary">9</Badge></Nav.Link>
        {
          isLoggedin()?(
            <Nav.Link as={Link} to="/Login" onClick={()=>{Logout()}}>LOGOUT</Nav.Link>

          ):(
            <Nav.Link as={Link} to="/Login">LOGIN</Nav.Link>
          )
        }

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;


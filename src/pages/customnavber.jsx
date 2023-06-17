import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logout } from '../api/user';
import { Link } from 'react-router-dom';
import { isLoggedin } from '../api/user';
import style from './style/nav.module.css';

function CollapsibleExample() {
  return (
    <div style={{position: "sticky", top: 0, zIndex: 100}}>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="white" style={{height:"80px"}}>
        <Container>
          <Navbar.Brand as={Link} to="/"><img style={{ width: "140px" }} src="https://nouthemes.net/html/trueshoes/images/logo.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "space-evenly" }}>
            <Nav className={style.meauto}>
              <Nav.Link as={Link} to="/men">MEN</Nav.Link>
              <Nav.Link as={Link} to="/women">WOMEN</Nav.Link>
              <Nav.Link as={Link} to="/kid">KIDS</Nav.Link>
            </Nav>
            <Nav className={style.meauto}>
              <Nav.Link as={Link} to="/ADD">Cart<Badge bg="primary">9</Badge></Nav.Link>
              {
                isLoggedin() ? (
                  <Nav.Link as={Link} to="/Login" onClick={() => { Logout() }}>LOGOUT</Nav.Link>
                ) : (
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

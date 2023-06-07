import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import styles from './style/signup.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import axios from 'axios'
import Button from "../Components/Button";
import Input from "../Components/input";


const Register = () => {

  const [Name, setname]=useState('')
  const [Email, setemail]=useState('')
  const [Password, setpassword]=useState('')
  const [Phone, setphone]=useState('')
  const [Confrimpassword, setconfrimpassword]=useState('')
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate()

const handleform = async(event) =>{
  event.preventDefault();
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  setValidated(true)

  try {
    const response = await axios.post("http://localhost:4000/users/signup",{
      Email,Name,Phone,Password
    })
    navigate('/')
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
      <div className={styles.center}>
      <Form noValidate validated={validated}  onSubmit={handleform} className={`${styles.form} ${styles.transparentGlass}`}>
        <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://nouthemes.net/html/trueshoes/images/logo.png" style={{width:"140px",margin:"30px"}} rounded />
        </Col>
      </Row>
    </Container>
          <Row>
          <Input label="Name" placeholder="Enter Name" type="text" onChange={(e)=>setname(e.target.value)} required/>

            <Input label="Phone" placeholder="Enter Phone" type="text"  onChange={(e)=>setphone(e.target.value)} required/>

          </Row>
          <Input label="Email address" placeholder="Enter email" type="email"  onChange={(e)=>setemail(e.target.value)} required/>
          <Row>
          <Input label="Password" placeholder="Enter Password" type="password" onChange={(e)=>setpassword(e.target.value)} required/>

          <Input label="Confrim Password" placeholder="Confrim Password" type="password" onChange={(e)=>setconfrimpassword(e.target.value)} required/>
          </Row>
          <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
            <Form.Check className={styles.label} type="checkbox" label="Check me out" />
          </Form.Group>
          <Row>
            
          <Button variant="primary" type="submit" value=' Create Account' className="custom-button"/>

          <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
          <Form.Label className={`${styles.loginhere} ${styles.label}`}>Already have an account ? <a onClick={()=>navigate('/login')}>  Login here</a></Form.Label>
          </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Register;

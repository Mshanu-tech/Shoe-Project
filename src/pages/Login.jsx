import { useState } from "react";
import Form from 'react-bootstrap/Form';
import styles from './style/signup.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from "../Components/Button";
import axios from 'axios';
import Input from "../Components/input";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(email,password);
    try {
      const response = await axios.post('http://localhost:4000/users/login', {
        Email: email,
        Password: password,
      });
      console.log("user data", response.data);
    } catch (error) {
      console.log(error);
    }
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = () => {
    navigate("/Signup");
  };

  return (
    <>
      <div className={styles.center}>
        <Form onSubmit={handleForm} className={`${styles.form} ${styles.transparentGlass}`}>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="https://nouthemes.net/html/trueshoes/images/logo.png" style={{ width: "140px", margin: "30px" }} rounded />
              </Col>
            </Row>
          </Container>
          <Row>
            <Input label="Email address" placeholder="Enter email" type="email" name="useremail" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </Row>
          <Row>
            <Input label="Password" placeholder="Enter Password" type="password" name="userpassword" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Row>
          <Form.Group style={{ display: "flex", justifyContent: "space-evenly" }} className="mb-3" controlId="formBasicCheckbox">
            <Button variant="primary" type='submit' value='login' />
            <Button variant="primary" value="Signup" buttonhandler={handleFormSubmit} />
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default Login;

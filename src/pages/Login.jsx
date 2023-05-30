import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './pagecss/index.css'
// import { useRef } from 'react';
// import Nav from './customnavber'
import { login } from '../api/user';
import { useState } from 'react';

function Login() {
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [error, seterror] = useState('')


  const navigate= useNavigate()

  const handleform = ()=>{
    seterror('');
    login(email,password)
      .then(()=>{
        navigate('/') 
      })
      .catch(()=>{
        seterror('Login Failed')
      })
  }
  // console.log(email);
  // console.log(password);

  return (
    <>
     
      <div className='center'>
        <Form  className='form' onSubmit={handleform}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>{error}</label>
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group style={{    display: "flex" ,justifyContent: "space-evenly"}} className="mb-3" controlId="formBasicCheckbox">
          <Button variant="primary" onClick={handleform}>
            Submit
          </Button>
          <Button variant="primary" onClick={()=>{navigate('/Signup')}} >
            Signup
          </Button>
          </Form.Group>
        </Form>
      </div>
      </>
  )
}

export default Login;

import './Login.css';
import React,{useState, useRef} from 'react';
/* import {useNavigate} from 'react-router-dom'; */
import SignUp from '../SignUp/SignUp';
import {Form, Button, Card} from 'react-bootstrap'


export default function Login() {
    /* const [errorMessage, setErrorMessage] = useState(''); */
    const [emailValue, setEmailValue] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();
    

    /* const history = useNavigate(); */

    const  onLoginClicked = async () =>{
        


    }
  return (
    <>
     {/* <div className="content-contianer">
        <h1>Let's start scoring Volleyball matches !</h1>
        <div className='login-form'>
        <h2>Log In</h2>
        {/* {errorMessage && <div className='fail'>{errorMessage}</div>} 
        <label>E-mail : </label>
        <input placeholder="abd@email.com" value={emailValue} onChange={e=>setEmailValue(e.target.value)}></input>
        <label>Password : </label>
        <input placeholder='password' type='password' value={password} onChange={e=>setPassword(e.target.value)}></input>
        <button onClick={onLoginClicked} diabled={!emailValue || password}>Log In</button>
        {/* <button onClick={() => history('/forgot-password')}>Forgot my password</button>
        <button onClick={() => history('/signup')}>Sign Up</button> 
        </div> 
    </div> */}
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder="abd@email.com" required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="password" required/>
                    </Form.Group><br/>
                    <Button className="w-100" tupe="submit">Log In</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text center mt-2" >
            Don't have an account? Sign Up
        </div>

    </>
  )
}

import React, { useState } from 'react'
import { RegisterContainer } from '../Styles/Register.styled'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { URL } from '../Utils/Url';

export default function Register() {
    const [username, set__username] = useState("");
    const [email, set__email] = useState("");
    const [password, set__password] = useState("");
    const navigate = useNavigate()

    const handle__login = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(URL+"api/user/registeruser", {username, email, password}, {withCredentials:true})
            console.log(response.data)
            navigate("/login")
        }
        catch(err){
            console.log(true)
        }
    }

  return (
    <RegisterContainer>
        <form className='register__section'>
            <h2>REGISTER | DYNAMO HEALTH</h2>
            
            <input type='email' 
                placeholder='Enter your email...' 
                value={email} 
                onChange={(e) => set__email(e.target.value)} 
            />
            <input type="text" 
                placeholder='Enter your username...'
                value={username}
                onChange={(e) => set__username(e.target.value)}
            />
            <input type="password" 
                placeholder='*************'
                value={password}
                onChange={(e) => set__password(e.target.value)} 
            />
            <button onClick={handle__login} type='submit'>Register Now</button>
            
            <p>
                <Link to="/register" className='link__btn'>
                    Already own an account? Login Here
                </Link>
            </p>
        </form>
    </RegisterContainer>
    
  )
}

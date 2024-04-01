import React, { useContext, useState } from 'react'
import { LoginContainer } from '../Styles/Login.styled'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { URL } from '../Utils/Url';
import { UserContext } from '../ContextApi/AuthContext';

export default function Login() {
    const [email, set__email] = useState("");
    const [password, set__password] = useState("");
    const navigate = useNavigate();
    const {setCurrentUser} = useContext(UserContext);

    const login__handler = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(URL+"api/user/loginuser", {email, password}, {withCredentials:true});
            console.log(response.data);
            setCurrentUser(response.data);
            navigate("/")
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <LoginContainer>
        <form className='login__section'>
            <h2>LOG IN | DYNAMO HEALTH</h2>
            <input type='email' 
                placeholder='Enter your email...'
                value={email}
                onChange={(e) => set__email(e.target.value)} 
            />
            <input type="password" 
                placeholder='Enter your password...' 
                value={password}
                onChange={(e) => set__password(e.target.value)}
            />
            <button onClick={login__handler}>Login Now</button>
            <p>
                <Link to="/register" className='link__btn'>
                    Don't have an account? Register Here
                </Link>
            </p>
        </form>
    </LoginContainer>
    
  )
}

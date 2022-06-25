import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Login/action";



export const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const{ isAuthenticate } = useSelector((store)=>store.login);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = ()=>{
        const userData = {
            email,
            password
        }
         console.log(userData);
        dispatch(login(userData));
    }
    console.log("loading",isAuthenticate);
    if(isAuthenticate){

        navigate('/');
    }
    return (
        <>
        <h1>Login</h1><br /><br />
        <input type="Email" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/><br /><br />
        <input type="password"  placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/><br /><br /><br />
        <button onClick={handleLogin}>Login</button>
        
        
        </>
    )
}
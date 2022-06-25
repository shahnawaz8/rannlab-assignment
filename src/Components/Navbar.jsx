import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../Redux/GetUser/action';
import { logout } from '../Redux/Login/action';
import './home.css';

export const Navbar = ()=>{
    const {token,isAuthenticate} = useSelector((store)=>store.login);
    const {username,email,imgurl} = useSelector((store)=>store.user);
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handlelogout = ()=>{
        dispatch(logout())
    }
    useEffect(()=>{
        if(isAuthenticate){
            getUser(token,dispatch);
        }
    },[])
    console.log({token,isAuthenticate,username,email,imgurl});
    
    return (
        <>
        <div className='main'>
            
            <div onClick={()=>navigate('/')}>Home</div>
            <div onClick={()=>navigate('/login')}>Login</div>
            <div onClick={()=>navigate('/register')}>Signup</div>
            {isAuthenticate?
            <div onClick={handlelogout}>
            <div className='avtar'>
                <div className='userDetails'>
                    <div className='subAvtar'>
                        <img src={imgurl} alt="avtar" />
                        
                    </div>
                    <h4>{username}</h4>
                    <p>{email}</p>
                    <h3>Account Setting</h3>
                </div>
               <img src={imgurl} alt="avtar" />
            </div>
        </div>:""}
        </div>

        </>
    )
} 
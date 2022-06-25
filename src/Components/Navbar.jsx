import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Login/action';
import './home.css';

export const Navbar = ()=>{
    const {token,isAuthenticate} = useSelector((store)=>store.login);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log("token",token)
    const handlelogout = ()=>{
            dispatch(logout())
    }
    return (
        <>
        <div className='main'>
            <div onClick={()=>navigate('/')}>Home</div>
            <div onClick={()=>navigate('/login')}>Login</div>
            <div onClick={()=>navigate('/register')}>Signup</div>
            <div onClick={handlelogout}>Logout</div>
        </div>

        </>
    )
} 
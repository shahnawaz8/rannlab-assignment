import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Home = ()=>{
    const {token} = useSelector((store)=>store.login);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return (
        <>
        <h1>Home</h1>

        </>
    )
} 
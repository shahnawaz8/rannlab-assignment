import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./home.css";

export const Home = ()=>{
    const {token} = useSelector((store)=>store.login);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return (
        <>
        <button onClick={()=>navigate('/add-book')}>Add book</button>
        <div className='container'>
            <div>
                <h1>{"bookname"}</h1>
                <h2>Details of the Author</h2>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Eduction</th>
                    <th>ISBN Number</th>
                    <th>Address</th>
                </tr>
                <tr>
                    <td>{"Priyanka Signh"}</td>
                    <td>{"MIT"}</td>
                    <td>{"0202010503604"}</td>
                    <td>{"Rannlab Technologies"}</td>
                </tr>
            </table>
            </div>
            
        </div>

        </>
    )
} 
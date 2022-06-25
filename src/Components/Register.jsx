import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/Signup/action";


export const Register = ()=>{
    const [imgurl,setImgurl] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const [password_c,setPasswordC] = useState("");

    const{ isSignUpSuccess } = useSelector((store)=>store.signup);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleImageChange = (e)=> {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        if(files[0].type == "image/jpeg" || files[0].type == "image/jpg"){
            // console.log(files[0].name);
            // console.log(files[0].type);
            // console.log((files[0].size/(1024*1024)).toFixed(3)+"MB");
            reader.onload = (e)=>{
                return setImgurl(e.target.result)
            }
        }
    }
    const handleRegister = ()=>{
        const userData = {
            name,
            email,
            imgurl,
            password,
            password_confirmation:password_c
        }
         console.log(userData);
        dispatch(registerUser(userData));
    }
    console.log("loading",isSignUpSuccess);
    if(isSignUpSuccess){
        navigate('/login');
    }
    
    return (
        <>
        <h1>Register</h1><br /><br />
        <input type="text"  placeholder="Name..." onChange={(e)=>setName(e.target.value)}/><br /><br />
        <input type="Email" placeholder="Email..." onChange={(e)=>setEmail(e.target.value)}/><br /><br />
        <label> Profile pic</label><br />
        <input type="file" onChange={(e)=>handleImageChange(e)}/><br /><br />
        <input type="password"  placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br /><br />
        <input type="password"  placeholder="Confirm Password" onChange={(e)=>setPasswordC(e.target.value)}/><br /><br />

        <button onClick={handleRegister}>Register</button>
        </>
    )
}
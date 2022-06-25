import axios from "axios"

export const userSuccess=(payload)=>({
    type:"SUCCESS",
    payload
})

export const getUser=(token,dispatch)=>{
    // console.log(token)
    axios.get(`http://localhost:5000/api/user/loggeduser`,{
        headers:{
            "Authorization" : `Bearer ${token}`
        }
    })
    .then((res)=>{
        console.log('getuse details',res);
        dispatch(userSuccess({username:res.data.user.name,email:res.data.user.email,imgurl:res.data.user.imgurl}))
    })
    .catch((err)=> console.log(err));
}
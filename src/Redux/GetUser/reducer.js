const initState = 
{
    username: sessionStorage.getItem("loggedUserName") ||"",
    email: sessionStorage.getItem("loggedUserEmail") || "",
    imgurl: sessionStorage.getItem("loggedUserImgUrl") || "",

}

 export  const userReducer  = (state=initState,{type,payload})=>{
    switch (type) {
        case "SUCCESS":{
            // console.log(payload,"reducer-user")
            sessionStorage.setItem("loggedUserName",payload.username)
            
            sessionStorage.setItem("loggedUserEmail",payload.email)
            return{
                ...state,
                username:payload.username,
                email:payload.email,
                imgurl:payload.imgurl
            }
        }
        default:
            return state;
    }
}
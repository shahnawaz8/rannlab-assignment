import* as types from './ActionType'
import Axios  from 'axios'

 const FetchDelhiRequest=(payload)=>{
   return{
  type:types.fetch_Delhi_Request,
  payload
   }
}
 const FetchDelhiSuccess=(payload)=>{
    return{
        type:types.fetch_Delhi_Success,
        payload
    }
}
 const FetchDelhiFailure=(payload)=>{
    return{
        type:types.fetch_Delhi_Failure,
        payload
    }
}

export const fetchData=(payload)=>(dispatch)=>{
    dispatch(FetchDelhiRequest())
    console.log(payload,"fetchdata")
    Axios.get("/Delhi",{
       params:{
           ...payload,  
       }
    })
    .then((res)=>{
        return dispatch(FetchDelhiSuccess(res.data))     
    })
    .catch((e)=>{
        return dispatch(FetchDelhiFailure(e.data))
    })
}


const FetchPackageRequest=(payload)=>{
    return{
   type:types.fetch_Package_Request,
   payload
    }
 }
  const FetchPackageSuccess=(payload)=>{
     return{
         type:types.fetch_Package_Success,
         payload
     }
 }
  const FetchPackageFailure=(payload)=>{
     return{
         type:types.fetch_Package_Failure,
         payload
     }
 }
 
 export const fetchPackageData=(payload)=>(dispatch)=>{
     dispatch(FetchPackageRequest())
    //  console.log(payload,"fetchdata")
     Axios.get("/package",{
        params:{
            ...payload,  
        }
     })
     .then((res)=>{
         return dispatch(FetchPackageSuccess(res.data))     
     })
     .catch((e)=>{
         return dispatch(FetchPackageFailure(e.data))
     })
 }


const FetchGujRequest=(payload)=>{
    return{
   type:types.fetch_Guj_Request,
   payload
    }
 }
  const FetchGujSuccess=(payload)=>{
     return{
         type:types.fetch_Guj_Success,
         payload
     }
 }
  const FetchGujFailure=(payload)=>{
     return{
         type:types.fetch_Guj_Failure,
         payload
     }
 }
 
 export const fetchGujData=(payload)=> (dispatch)=>{
     dispatch(FetchGujRequest)
     Axios.get("/Gujrat",{
        params:{
            ...payload
        }
     })
     .then((res)=>{
         return dispatch(FetchGujSuccess(res.data))     
     })
     .catch((e)=>{
         return dispatch(FetchGujFailure(e.data))
     })
 }

 const FetchGoaRequest=(payload)=>{
    return{
   type:types.fetch_Goa_Request,
   payload
    }
 }
  const FetchGoaSuccess=(payload)=>{
     return{
         type:types.fetch_Goa_Success,
         payload
     }
 }
  const FetchGoaFailure=(payload)=>{
     return{
         type:types.fetch_Goa_Failure,
         payload
     }
 }
 
 export const fetchGoaData=(payload)=> (dispatch)=>{
     dispatch(FetchGoaRequest)
     Axios.get("/Goa",{
        params:{
            ...payload
        }
     })
     .then((res)=>{
         return dispatch(FetchGoaSuccess(res.data))     
     })
     .catch((e)=>{
         return dispatch(FetchGoaFailure(e.data))
     })
 }


 const FetchSingleDelhiRequest=(payload)=>{
    return{
   type:types.fetch_Delhi_Single_Request,
   payload
    }
 }
  const FetchSingleDelhiSuccess=(payload)=>{
     return{
         type:types.fetch_Delhi_Single_Success,
         payload
     }
 }
  const FetchSingleDelhiFailure=(payload)=>{
     return{
         type:types.fetch_Delhi_Single_Failure,
         payload
     }
 }
 
 export const fetchSingleDelhiData=(id)=> (dispatch)=>{
     dispatch(FetchSingleDelhiRequest())
     Axios.get(`/Delhi/${id}`)
     .then((res)=>{
         return dispatch(FetchSingleDelhiSuccess(res.data))     
     })
     .catch((e)=>{
         return dispatch(FetchSingleDelhiFailure(e.data))
     })
 }
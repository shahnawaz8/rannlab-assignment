import* as types from './ActionType'

const initialState={
    laoding:false,
    Error:false,
    
    products:[],
    currentProduct:{},
}

export const productReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.fetch_Delhi_Request:
        return{
              ...state,
              laoding:true,
              Error:false
        }
        case types.fetch_Delhi_Success:
            return{
                ...state,
                laoding:false,
                products:payload,
                Error:false
            }
        case types.fetch_Delhi_Failure:
            return{
                ...state,
                laoding:false,
                Error:true
            }
            case types.fetch_Guj_Request:
                return{
                    ...state,
                    laoding:true,
                    Error:false
                }
           case types.fetch_Guj_Success:
            return{
                ...state,
                products:payload,
                Error:false

            }
            case types.fetch_Guj_Failure:
                return{
                    ...state,
                    laoding:false,
                    Error:true
                }

              case types.fetch_Goa_Request:
                return{
                    ...state,
                    laoding:true,
                    Error:false
                }  
                case types.fetch_Goa_Success:
                    return{
                        ...state,
                        products:payload,
                        Error:false
                    }
                    case types.fetch_Goa_Failure:
                        return{
                            ...state,
                            laoding:false,
                            Error:true
                        }
                     case types.fetch_Delhi_Single_Request:
                        return{
                            ...state,
                            laoding:true,
                            Error:false
                        } 
                      case types.fetch_Delhi_Single_Success:
                        return{
                            ...state,
                            laoding:false,
                            currentProduct:payload,
                            Error:false
                        }
                      case types.fetch_Delhi_Single_Failure:
                        return{
                            ...state,
                            laoding:false,
                            Error:true
                    
                        }
                      case types.fetch_Package_Request:
                        return{
                            ...state,
                            laoding:true,
                            Error:false
                        }  
                        case types.fetch_Package_Success:
                            return{
                                ...state,
                               
                                products:payload,
                                Error:false
                            }
                          case types.fetch_Package_Failure:
                            return{
                                ...state,
                                laoding:false,
                                Error:true
                        
                            }      
            default:
                return state;
        }
    }

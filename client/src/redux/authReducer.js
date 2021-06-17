import {authApi} from '../api/authApi'

const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH'
const TOGGLE_IS_INIT = 'TOGGLE_IS_INIT'
const GET_USER = 'GET_USER'



const initialState = {
    currentUser: {
        id:'',
        login:'',
        name:'',
        avatar:''
    },
    isAuth:false,
    isInit:false
}

const authReducer = (state = initialState, action)=>{
    switch (action.type) {
        case TOGGLE_IS_AUTH:
            return {...state, isAuth:action.payload}
            case TOGGLE_IS_INIT:
                return {...state, isInit:action.payload}
            case GET_USER:
                return{...state, currentUser:action.payload}
        default:
            return state;
    }
}

export const toggleIsAuthAC =(payload)=>({type:TOGGLE_IS_AUTH, payload})
export const toggleIsInitAC =(payload)=>({type:TOGGLE_IS_INIT, payload})
export const getUserAC =(payload)=>({type:GET_USER, payload})

export const initializationTC = () => {
    return dispatch =>{
           authApi.auth()
           .then(response=>{
               dispatch(getUserAC(response))
               dispatch(toggleIsAuthAC(true))
           })
           dispatch(toggleIsInitAC(true))    
    }
}
export const loginTC = (login, password) =>{
    return dispatch =>{
        authApi.login(login, password)
        .then(res=>{
            dispatch(getUserAC(res))
            dispatch(toggleIsAuthAC(true))
        })
    }
}
export const registrationTC = () =>{
    return dispatch =>{

    }
}



export default authReducer



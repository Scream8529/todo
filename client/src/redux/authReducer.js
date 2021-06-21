import {authApi} from '../api/authApi'
import { defaultSettingAC } from './appReducer'

const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH'
const TOGGLE_IS_INIT = 'TOGGLE_IS_INIT'
const GET_USER = 'GET_USER'



const initialState = {
    currentUser: {
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
    return  dispatch =>{
            authApi.auth()
           .then(response=>{
               dispatch(getUserAC(response))
               dispatch(toggleIsAuthAC(true))
           })
           dispatch(toggleIsInitAC(true))
    }
}
export const logoutTC = () =>{
    return dispatch =>{
        authApi.logout()
        dispatch(toggleIsAuthAC(false))
        dispatch(defaultSettingAC())
    }
}
export const loginTC = (login, password) =>{
    return async dispatch =>{
        authApi.login(login, password)
        .then(res =>{
            dispatch(getUserAC(res.user))
            dispatch(toggleIsAuthAC(true))
            console.log(res.user)
        })
        }
    }
export const registrationTC = () =>{
    return dispatch =>{

    }
}



export default authReducer



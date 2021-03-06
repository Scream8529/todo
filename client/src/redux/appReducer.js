import { listApi } from "../api/authApi"

const GET_LIST = 'GET_LIST'
const TOGGLE_ITEMS_LIST = 'TOGGLE_ITEMS_LIST'
const GET_CURRENT_ITEM = 'GET_CURRENT_ITEM'
const CLEAR_CURRENT_ITEM = 'CLEAR_CURRENT_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const DEFAULT_SETTING= 'DEFAULT_SETTING'

const TOGGLE_IS_EDITING = 'TOGGLE_IS_EDITING'
const TOGGLE_IS_INFO_POPUP = 'TOGGLE_IS_INFO_POPUP'
const TOGGLE_IS_CREATE_POPUP = 'TOGGLE_IS_CREATE_POPUP'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const CHANGE_ITEM = 'CHANGE_ITEM'
const TOGGLE_CURRENT_NAME = 'TOGGLE_CURRENT_NAME'
const TOGGLE_CURRENT_DESCRIPTION = 'TOGGLE_CURRENT_DESCRIPTION'
const DONE_ITEM = 'DONE_ITEM'

const initialState = {
    listType: 1,
    isFetching: false,
    list: [],
    currentItem: {},
    isInfoPopup: false,
    isCreatePopup: false,
    isEditing: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST:
            return { ...state, list: action.payload }
        case TOGGLE_ITEMS_LIST:
            return { ...state, listType: action.payload }
        case TOGGLE_IS_INFO_POPUP:
            return { ...state, isInfoPopup: action.payload }
        case TOGGLE_IS_CREATE_POPUP:
            return { ...state, isCreatePopup: action.payload }
        case GET_CURRENT_ITEM:
            return { ...state, currentItem: action.payload }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        case TOGGLE_IS_EDITING:
            return { ...state, isEditing: action.payload }
            case DONE_ITEM:
                return {...state, list:[...state.list.map(l=>{
                    if (l._id === action.payload){
                        return {...l, done:true}
                    }
                    return l
                })]}
        case CHANGE_ITEM:
            return {...state, list:[...state.list.map(l=>{
                if (l._id === action.id){
                    return {...l, name: action.name, description: action.description}
                }
                return l
            })]}        
        case TOGGLE_CURRENT_NAME:
            return { ...state, currentItem: { ...state.currentItem, name: action.payload } }
        case TOGGLE_CURRENT_DESCRIPTION:
            return { ...state, currentItem: { ...state.currentItem, description: action.payload } }
        case DELETE_ITEM:
            return { ...state, list: [...state.list.filter(l => l._id !== action.payload)] }
        case DEFAULT_SETTING:
            return {...initialState}
        case CLEAR_CURRENT_ITEM:
            return { ...state, currentItem: {} }
        default:
            return state;
    }
}


export const doneItemAC = (payload)=>({type:DONE_ITEM, payload})
export const changeItemAC = (id, name,  description)=>({type:CHANGE_ITEM, id, name, description})
export const defaultSettingAC = () =>({type:DEFAULT_SETTING})
export const toggleCurrentNameAC = (payload) => ({ type: TOGGLE_CURRENT_NAME, payload })
export const toggleCurrentDescriptionAC = (payload) => ({ type: TOGGLE_CURRENT_DESCRIPTION, payload })
export const toggleIsEditing = (payload) => ({ type: TOGGLE_IS_EDITING, payload })
export const deleteItemAC = (payload) => ({ type: DELETE_ITEM, payload })
export const toggleIsInfoPopup = (payload) => ({ type: TOGGLE_IS_INFO_POPUP, payload })
export const toggleIsFetching = (payload) => ({ type: TOGGLE_IS_FETCHING, payload })
export const toggleIsCreatePopup = (payload) => ({ type: TOGGLE_IS_CREATE_POPUP, payload })
export const getList = (payload) => ({ type: GET_LIST, payload })
export const getCurrentItemAC = (payload) => ({ type: GET_CURRENT_ITEM, payload })
export const clearCurrentItemAC = () => ({ type: CLEAR_CURRENT_ITEM })
export const toggleItemsListAC = (payload) => ({ type: TOGGLE_ITEMS_LIST, payload })

export const changeItemTC = (id, type, name, description) =>{
    return dispatch => {
        listApi.changeItem(id, type, name, description)
        .then(res=>{
            dispatch(changeItemAC(res._id, res.name, res.description))
            // dispatch(toggleIsInfoPopup(false))
            dispatch(toggleIsEditing(false))
        })
    }
}
export const doneItemTC = (id, type)=>{
    return dispatch =>{
        listApi.doneItem(id, type)
        .then(res=>{
            dispatch(doneItemAC(res._id))
        })
    }
}
export const deleteItemTC = (id, type) => {
    return dispatch => {
        listApi.deleteItem(id, type)
            .then(res => {
                if (res.status === 0) {
                    dispatch(deleteItemAC(id))
                    dispatch(toggleIsInfoPopup(false))
                }
                else alert("Deleting error")
            })
    }
}



export const getCurrentItemTC = (id, type) => {
    return dispatch => {
        dispatch(toggleIsInfoPopup(true))
        dispatch(toggleIsFetching(true))
        clearCurrentItemAC()
        listApi.getOneItem(id, type)
            .then(res => {
                dispatch(getCurrentItemAC(res))
                dispatch(toggleIsFetching(false))
            })
    }
}
export const addItemAC = (name, description, type) => {
    return dispatch => {
        listApi.addItem(name, description, type)
            .then(res => {
                dispatch(toggleIsCreatePopup(false))
                dispatch(getListTC(type))
            })
    }
}
export const toggleItemsListTC = (type = 1) => {
    return dispatch => {
        dispatch(toggleIsFetching(true))
        dispatch(toggleItemsListAC(type))
        listApi.getList(type)
            .then(res => {

                dispatch(getList(res.list))
                dispatch(toggleIsFetching(false))
            })
    }
}
export const getListTC = (type = 1) => {
    return dispatch => {
        listApi.getList(type)
            .then(res => {
                dispatch(getList(res.list))
            })
    }
}

export default appReducer
import axios from 'axios'
import Cookies from 'js-cookie'




const instance = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/v1/',
    headers:{
        Authorization: `Bearer ${Cookies.get('token')}`
    }
  });

 export let authApi = {
      auth (){
          return instance.get('auth')
          .then(response=>{
              return response.data
          })
      },
      login(login, password){
          return instance.post('auth/login', {login, password})
          .then(res=>{
              Cookies.set('token', res.data.token)
              return res.data
          })
      },
      logout(){
            Cookies.remove('token')
    }
  }
  export let listApi ={
    getList (type){
        return instance.get(`content?type=${type}`)
        .then(res=>{
            return res.data
        })
    },
    getOneItem (id, type){
        return instance.get(`content/item?type=${type}&id=${id}`)
        .then(res=>{
            return res.data
        })
    },
    addItem(name, description, type){
        return instance.post(`content`, {name, description, type})
        .then(res=>{
            return res.data
        })
    },
    deleteItem (id, type){
        return instance.delete(`content?id=${id}&type=${type}`)
        .then(res=>{
            return res.data
        })
    }
}


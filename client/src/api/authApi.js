import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/v1/',
    header:{
        Authorization: Cookies.get("token")
    }
  });

 let authApi = {
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
      }
  }


  export default authApi
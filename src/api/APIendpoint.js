import baseURL from './baseURL';

  export const apiTest = async () =>{
    const response = await baseURL.get('/posts', {});
    return response
  }

  export const login = async (email, password) =>{
    const response = await baseURL.get('/login', {});
    // console.log(response.data);
    if(response.data.email === email && response.data.password ===password) {
      return true
    } else {
      return false
    }
  }

  export const getUsers = async() =>{
    const response = await baseURL.get('/users');
    return response.data.userData;
  }

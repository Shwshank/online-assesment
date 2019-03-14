import baseURL from './baseURL';

  export const apiTest = async () =>{

    const response = await baseURL.get('/posts', {});
    return response
  }

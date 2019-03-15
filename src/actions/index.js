import { getUsers } from '../api/APIendpoint';

export const setUser = (value="") => {

  return({
    type: 'SET_USER',
    payload: value
  });
};

export const setUsers = () => async dispatch => {

  let users = [];

  getUsers().then(res=>{
    users = res;
    // console.log(res);
    dispatch({
      type: 'SET_USERS',
      payload:users
    });
  })
}

export const deleteUser = (value) =>{

  return({
    type: 'DELETE_USER',
    payload: value
  });
}

export const setUser = (value="") => {

  return({
    type: 'SET_USER',
    payload: value
  });
};

export const deleteUser = (value) =>{

  return({
    type: 'DELETE_USER',
    payload: value
  });
}

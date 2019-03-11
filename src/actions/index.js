export const setName = (value = "") =>{

  return({
    type: 'SET_NAME',
    payload: value
  })
};

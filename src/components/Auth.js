const Auth = () =>{

  let token = localStorage.getItem("token");
  console.log(token);

  if(token)
    return true;
  else
    return false;

};

export default Auth;

// export const setName = (value = "") =>{
//
//   return({
//     type: 'SET_NAME',
//     payload: value
//   })
// };

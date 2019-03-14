import { combineReducers } from 'redux';

const userReducer = () => {
  return [
    {name:"User Name1", email:"useremail1@some.com", phone:"", status:"Taken", marks:"10", timeStamp:"22-2-2019"},
    {name:"User Name2", email:"useremail2@some.com", phone:"", status:"Assigned", marks:"", timeStamp:""},
    {"name":"User Name3", "email":"useremail3@some.com", phone:"", status:"", marks:"", timeStamp:""}
  ];
};

const setUser = (state=[], action) => {

  switch(action.type) {
    case 'SET_USER' :
      return [...state, action.payload];
    default:
     return [...state]
  }
}

export default combineReducers({
  users: userReducer,
  setUser: setUser
})

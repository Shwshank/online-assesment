import { combineReducers } from 'redux';

const userReducer = () => {
  return [
    {name:"User Name1", email:"useremail1@some.com", phone:"", status:"Taken", marks:"10", timeStamp:"22-2-2019"},
    {name:"User Name2", email:"useremail2@some.com", phone:"", status:"Assigned", marks:"", timeStamp:""},
    {"name":"User Name3", "email":"useremail3@some.com", phone:"", status:"", marks:"", timeStamp:""}
  ];
};

const setUserReducer = (state=[], action) => {
  console.log(state);
  switch(action.type) {
    case 'SET_USER' :
        return [...state, action.payload]

    case 'DELETE_USER' :{

      let temp = state;
      temp.splice(0, action.payload)
      console.log(temp);
      return [...temp]
    }

    default:
       return [...state]
  }
}

const deleteUserReducer = (state=[], action) =>{

  console.log(state);
  console.log(action);
  switch(action.type) {
    case 'DELETE_USER' :{

      let temp = state;
      temp.splice(0, action.payload)
      console.log(temp);
      return [...temp]
    }
    default:
      return[...state]
  }
}

export default combineReducers({
  userReducer: userReducer,
  setUserReducer: setUserReducer,
  deleteUserReducer: deleteUserReducer
})

import { combineReducers } from 'redux';

const userReducer = (state=[], action) => {

  switch(action.type) {

    case 'SET_USER' :
        return [...state, action.payload]

    case 'SET_USERS' : {
        return [...state, ...action.payload]
    }

    case 'DELETE_USER' :{
      // console.log(action.payload);
      let temp = state;
      temp.splice(action.payload, 1)
      // console.log(temp);
      return [...temp]
    }

    default:
       return [...state]
  }
}

export default combineReducers({
  userReducer: userReducer
})

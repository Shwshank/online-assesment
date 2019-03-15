import _ from 'lodash';
import { combineReducers } from 'redux';

const userReducer = (state=[], action) => {

  switch(action.type) {

    case 'SET_USER' :
        return [...state, action.payload]

    case 'SET_USERS' : {
        action.payload = _.uniqBy(action.payload, 'name')
        state = [...state, ...action.payload]
        state = _.uniqBy(state, 'name')
        return [...state]
    }

    case 'DELETE_USER' :{
      // console.log(action.payload);
      let temp = state;
      temp.splice(action.payload, 1)
      // console.log(temp);
      return [...temp]
    }

    case 'CLEARSTORE' : {
      state = [];
      return state
    }

    default:
       return [...state]
    }
}

const questionReducer = (state=[], action) =>{

  switch (action.type) {

    case 'GET_QUESTIONS':{
      action.payload = _.uniqBy(action.payload, 'question')
      state = [...state, ...action.payload]
      state = _.uniqBy(state, 'question')
      return [...state]
    }

    default:
      return[...state]
  }
}

export default combineReducers({
  userReducer: userReducer,
  questionReducer: questionReducer
})

import _ from 'lodash';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

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

const examSetReducer = (state=[], action) =>{

  switch (action.type) {

    case 'GET_EXAMSET':{
      action.payload = _.uniqBy(action.payload, 'set_id')
      state = [...state, ...action.payload]
      state = _.uniqBy(state, 'set_id')
      return [...state]
    }

    case 'EDIT_EXAM_SET' : {
      // console.log(action.payload);
      let index =_.findIndex(state, {set_id: action.payload.set_id})
      console.log(index);
      if(index === -1) {
        state.push(action.payload)
      } else {
        // exam set present
        state[index] = action.payload
      }
      return [...state]
    }

    default:
      return[...state]
  }
}

const oneExamSetReducer = (state={}, action) =>{

  switch (action.type) {
    case 'ONE_EXAMSET':{
      let temp = action.payload
      if(temp[0].set_id){
        state = action.payload[0]
      }
      // console.log(state);
      return state
    }
    default:
    return state
  }
}

export default combineReducers({
  formReducer: formReducer,
  userReducer: userReducer,
  examSetReducer: examSetReducer,
  questionReducer: questionReducer,
  oneExamSetReducer: oneExamSetReducer
})

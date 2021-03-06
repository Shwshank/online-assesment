import _ from 'lodash';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const user = (state=[], action) => {

  switch(action.type) {

    case 'SET_USER' :{
      // console.log(action.payload);
      return [...state, action.payload]
    }

    case 'SET_USERS' : {
        action.payload = _.uniqBy(action.payload, 'email')
        state = [...state, ...action.payload]
        state = _.uniqBy(state, 'email')
        return [...state]
    }

    case 'DELETE_USER' :{
      console.log(action.payload);
      state.splice(action.payload, 1)
      return [...state]
    }

    case 'EDIT_USER' : {
      let index =_.findIndex(state, {user_id: action.payload.user.user_id})
      state[index] = action.payload.user
      return [...state]
    }

    case 'CLEARSTORE' : {
      state = [];
      return state
    }

    default:
       return [...state]
    }
}

const question = (state=[], action) =>{

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

const examSet = (state=[], action) =>{

  switch (action.type) {

    case 'GET_EXAMSET':{
      action.payload = _.uniqBy(action.payload, 'set_id')
      state = [...action.payload]
      // state = [...state, ...action.payload]
      state = _.uniqBy(state, 'set_id')
      return [...state]
    }

    case 'EDIT_EXAM_SET' : {
      // console.log(action.payload);
      let index =_.findIndex(state, {set_id: action.payload.set_id})
      // console.log(index);
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

const oneExamSet = (state={}, action) =>{

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

const tempSet = (state={}, action) => {

  switch (action.type) {
    case 'TEMP_EXAM_SET': {
      state = action.payload
      return state
    }
    default:
    return state
  }
}

const examUser = (state={}, action) => {

  switch (action.type) {
    case 'GET_EXAM_USER': {
      state = action.payload
      return state
    }
    default:
    return state
  }
}

const examSetForUser = (state={}, action) => {

  switch(action.type) {
    case 'GET_SET_FOR_EXAM': {
      state = action.payload
      return state
    }
    default:
    return state
  }
}

const responseArray = (state={}, action) => {

  switch(action.type) {
    case 'RESPONSE_ARRAY' : {
      state= action.payload
      return state
    }

    default:
    return state
  }
}

export default combineReducers({
  form: form,
  user: user,
  tempSet: tempSet,
  examSet: examSet,
  examUser: examUser,
  question: question,
  oneExamSet: oneExamSet,
  responseArray : responseArray,
  examSetForUser: examSetForUser,
})

import { getUsers, addNewUser, editUserAPI, deleteUserAPI, getAllQuestions, getAllExamSets, updateExamSet, getExamSetForExamAPI, getExamUserConformationDetails } from '../api/APIendpoint';

import history from "../components/history";


export const setUser = (newUser={}) => async dispatch => {
  console.log(newUser);

  addNewUser(newUser).then(res=>{
    console.log(res);

    dispatch({
      type: 'SET_USER',
      payload: newUser
    })
  }, err=>{
    console.log(err);
  })
}



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

export const setUsers1 = () => async dispatch => {

  let users = [];

  getUsers().then(res=>{
    users = res;
    // console.log(res);
    dispatch({
      type: 'SET_USERS',
      payload:users
    });
    console.log("/home");
    history.push("/home");
  })
}

export const deleteUser = (user, position) => async dispatch =>{

  console.log(position);
  deleteUserAPI({user_id: user.user_id}).then(res=>{
    console.log(res);
    dispatch({
      type: 'DELETE_USER',
      payload: position
    });
  }, err=>{
    console.log(err);
  })

}

export const getQuestions = () => async dispatch => {

  let questions = [];

  getAllQuestions().then(res=>{
    questions = res;
    // console.log(res);
    dispatch({
      type: 'GET_QUESTIONS',
      payload:questions
    });
  })
}

export const editExamSet = (updatedExamSet) => async dispatch => {

  updateExamSet(updatedExamSet).then(res=>{

    dispatch({
      type: "EDIT_EXAM_SET",
      payload: updatedExamSet
    }, err=>{
      console.log(err);
    })
  })

}

export const editUser = (user, exam) => async dispatch => {

  user.set_id = exam.set_id;
  user.status = "Assigned"
  user.marks = ""
  user.timeStamp = ""

  editUserAPI(user).then(res=>{
    
    dispatch({
      type: "EDIT_USER",
      payload: {user: user}
    })

  }, err=>{
    console.log(err);
  })

}

export const getExamSet = (set={}) => {
  // console.log(set);
  return({
    type: 'ONE_EXAMSET',
    payload: [set]
  })
}

export const getExamSets = () => async dispatch => {
  let examSet = [];

  getAllExamSets().then(res=>{
    examSet = res;
    dispatch({
      type: 'GET_EXAMSET',
      payload: examSet
    })
  })
}

export const getExamUserDetails =(id)=> async dispatch => {
  getExamUserConformationDetails(id).then(res=>{
    // console.log(res);

    dispatch({
      type: 'GET_EXAM_USER',
      payload: res
    })
  })
}

// export const getExamUserDetails =()=>{
//   let userDetails = {"user_id":"u121", "name":"User Name1", "email":"useremail1@some.com", "phone":"", "status":"Taken", "marks":"10", "timeStamp":"22-2-2019", "set_id": "102"}
//
//   return({
//       type: 'GET_EXAM_USER',
//       payload: userDetails
//     })
// }

export const getExamSetForExam = (token, user_id) => async dispatch =>{

  let set = {}

  getExamSetForExamAPI(token, user_id).then(res=>{
    // console.log(res);
    set = res
      dispatch({
      type: 'GET_SET_FOR_EXAM',
      payload: set
    })
  })
}

export const clearExamSetForExam = () => {
  let set = {}
  return({
    type: 'GET_SET_FOR_EXAM',
    payload: set
  })
}

export const examResponse = (response)=>{
  // console.log(response);
  return({
    type: 'RESPONSE_ARRAY',
    payload: response
  })
}

export function clearStore(){
  return {
    type:"CLEARSTORE"
  };
}

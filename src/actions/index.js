import { getUsers, addNewUser, editUserAPI, deleteUserAPI, getAllQuestions, getAllExamSets, updateExamSet, getExamUserConformationDetails } from '../api/APIendpoint';
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

export const getExamUserDetails =()=> async dispatch => {
  let userDetails = {}

  getExamUserConformationDetails().then(res=>{
    userDetails = res;
    dispatch({
      type: 'GET_EXAM_USER',
      payload: userDetails
    })
  })
}

export function clearStore(){
  return {
    type:"CLEARSTORE"
  };
}



// export const getQuestions = (questions="") =>{
//
//   questions = [
//     {question: "Some question here", ans: "Option 2", option1: "Option 1", option2: "Option 2", option3: "Option 3", option4: "Option 4", marks: "2", section: "Quant" },
//     {question: "Some question here", ans: "Option 2", option1: "Option 1", option2: "Option 2", option3: "Option 3", option4: "Option 4", marks: "2", section: "Quant" },
//     {question: "Some question here", ans: "Option 2", option1: "Option 1", option2: "Option 2", option3: "Option 3", option4: "Option 4", marks: "2", section: "Quant" }
//   ]
//
//   return({
//     type: 'GET_QUESTIONS',
//     payload: questions
//   })
//
// };

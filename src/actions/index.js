import { getUsers } from '../api/APIendpoint';

export const setUser = (value="") => {

  return({
    type: 'SET_USER',
    payload: value
  });
};

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

export const deleteUser = (value) =>{

  return({
    type: 'DELETE_USER',
    payload: value
  });
}

export const getQuestions = (questions="") =>{

  questions = [
    {question: "Some question here1", ans: "Option 2", option1: "Option 1", option2: "Option 2", option3: "Option 3", option4: "Option 4", marks: "2", section: "Quant" },
    {question: "Some question here2", ans: "Option 1", option1: "Option 1", option2: "Option 2", option3: "Option 3", option4: "Option 4", marks: "1", section: "Appt" },
    {question: "Some question here3", ans: "Option 3", option1: "Option 1", option2: "Option 2", option3: "Option 3", option4: "Option 4", marks: "2", section: "Quant" }
  ]

  return({
    type: 'GET_QUESTIONS',
    payload: questions
  })
}

export function clearStore(){
    return {
       type:"CLEARSTORE"
   };
}

import baseURL from './baseURL';

let header = {
    headers: {'Authorization': localStorage.getItem('token')}
};

export const login = async (email, password) =>{

  let data = {
    "email_id": email,
    "password": password
  }

  const response = await baseURL.post('/login', data, header);
  // console.log(response.data);

  if(response.data.success) {
    localStorage.setItem("token", response.data.token+"")
    return true
  } else {
    return false
  }
}

export const getUsers = async() =>{
  const response = await baseURL.get('/uploadUsers', header);
  return response.data.user_data;
}

export const deleteUserAPI = async(id) => {
  const response = await baseURL.post('/delUser', id, header);
  return response.data;
}

export const addNewUser = async(newUser) =>{
  // console.log(newUser);
  const response = await baseURL.post('/addUsers', newUser,  header);
  return response.data;
}

export const editUserAPI = async(user) => {
  const response = await baseURL.post('/addUsers', user,  header);
  return response.data;
}

export const getAllQuestions = async() =>{
  const response = await baseURL.get('/uploadQtn', header);
  return response.data.qtn_bank;
}

export const getAllExamSets = async() =>{
  const response = await baseURL.get('/addSet', header);
  return response.data.exam_set;
}

export const updateExamSet = async(examSet) =>{
  const response = await baseURL.post('/addSet', examSet, header);
  return response.data;
}

export const getExamUserConformationDetails = async() =>{
  const response = await baseURL.get('/startExamMetaData');
  return response.data;
}

export const getExamSetForExamAPI = async() => {
  const response = await baseURL.get('/setId=3884&userId=8387b0f2a74a4e7e862ddc3d2603130c');
  return response.data;
}

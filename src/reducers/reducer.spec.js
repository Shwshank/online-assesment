import combineReducers from '../reducers';

describe('Reducer Test', ()=>{

  //Global default state
  const defaultState = {"examSet": [], "examSetForUser": {}, "examUser": {}, "form": {}, "oneExamSet": {}, "question": [], "responseArray": {}, "user": []};

  it('Should return default state', () => {
    const newState = combineReducers(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  describe('User Reducer', ()=>{


    it('SET_USER', ()=>{

      const user = {"userDetails": "name123"}
      const prevState = []
      const newState = combineReducers(prevState, {
            type: 'SET_USER',
            payload: user
        });

      expect(newState.user).toEqual([user])
    })

    it('SET_USERS', ()=>{
      const user = [
        {name:"Sam", email: "some@email.com"},
        {name:"Sam", email: "sammy@email.com"},
        {name:"Sam1", email: "some@email.com"}
      ]
      const prevState = []
      const newState = combineReducers(prevState, {
            type: 'SET_USERS',
            payload: user
        });

      expect(newState.user).toEqual([
          {name:"Sam", email: "some@email.com"},
          {name:"Sam", email: "sammy@email.com"}
        ])
    })

    it('DELETE_USER', ()=>{

    })

    it('EDIT_USER', ()=>{

    })

    it('CLEARSTORE', ()=>{

    })
  })

  describe('Questions Reducer', ()=>{

    it('GET_QUESTIONS',()=>{

    })
  })

  describe('ExamSet Reducer',()=>{

    it('GET_EXAMSET',()=>{

    })

    it('EDIT_EXAM_SET',()=>{

    })
  })

  describe('oneExamSet Reducer',()=>{

    it('ONE_EXAMSET',()=>{

    })
  })

  describe('GET_EXAM_USER Reducer',()=>{

    it('GET_EXAM_USER',()=>{

    })
  })

  describe('GET_SET_FOR_EXAM Reducer',()=>{

    it('GET_SET_FOR_EXAM',()=>{

    })
  })
})

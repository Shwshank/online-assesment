import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import { findByTestAttr, checkProps  } from '../../utils/testUtils';
import  ExamSetting  from '../home/ExamSettingForm';

const setUp = (props={}) => {
  const component = shallow(<ExamSetting {...props} />)
  return component
}

describe('ExamSetting component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('ExamSetting div', ()=>{

  });

  describe('Checking PropTypes', ()=>{

    it('Should not through a warning', ()=>{

      const expectedProps = {
        examSetDetails: [{
          name: "name",
          question_array: [],
          set_id: "101",
          time: "2",
          total_marks: 1,
        }],

        getQuestions: ()=>{},

        questions: [{
          ans: "ans",
          difficulty_level: "level",
          image_url: "url",
          marks: "22",
          option_a: "option_a",
          option_b: "option_b",
          option_c: "option_c",
          option_d: "option_d",
          option_e: "option_e",
          question: "question",
          question_id: "q_id"
        }]
      }

      const propsErr = checkProps(ExamSetting, expectedProps)
                  expect(propsErr).toBeUndefined();

    });
  })

})

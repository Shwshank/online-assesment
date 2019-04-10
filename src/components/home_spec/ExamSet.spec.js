import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/testUtils';
import  ExamSet  from '../home/ExamSet';

const setUp = (props={}) => {
  const component = shallow(<ExamSet {...props} />)
  return component
}

describe('ExamSet component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('ExamSet div', ()=>{

  });

})

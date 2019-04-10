import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr} from '../../utils/testUtils';
import  ExamSettingForm  from '../home/ExamSettingForm';

const setUp = (props={}) => {
  const component = shallow(<ExamSettingForm {...props} />)
  return component
}

describe('ExamSettingForm component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('ExamSettingForm div', ()=>{

  });

})

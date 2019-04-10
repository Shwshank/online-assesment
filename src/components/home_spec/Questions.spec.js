import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/testUtils';
import  Questions  from '../home/Questions';

const setUp = (props={}) => {
  const component = shallow(<Questions {...props} />)
  return component
}

describe('Questions component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('Questions div', ()=>{

  });

})

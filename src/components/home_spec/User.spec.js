import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/testUtils';
import  User  from '../home/User';

const setUp = (props={}) => {
  const component = shallow(<User {...props} />)
  return component
}

describe('User component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('User div', ()=>{

  });

})

import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/testUtils';
import  Header  from '../home/Header';

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe('Header component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('Header div', ()=>{

  });

})

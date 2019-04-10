import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/testUtils';
import  Footer  from '../home/Footer';

const setUp = (props={}) => {
  const component = shallow(<Footer {...props} />)
  return component
}

describe('Footer component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('Footer div', ()=>{

  });

})

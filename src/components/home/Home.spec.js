import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/testUtils';
import  Home  from './Home';

const setUp = (props={}) => {
  const component = shallow(<Home {...props} />)
  return component
}

describe('Home component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('Home div', ()=>{
    const wrapper = findByTestAttr(component, 'home_div')
    expect(wrapper.length).toBe(1)
  });

})

import React from 'react';
import { shallow } from 'enzyme';

import {findByTestAttr} from '../utils/testUtils';
import App from './App';

const setUp = (props={}) => {
  const component = shallow(<App {...props} />)
  return component
}

describe('App Component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('App div', () => {
    const wrapper = findByTestAttr(component, 'app_fragment')
    expect(wrapper.length).toBe(1)
  })

  it('Router with history', () => {
    const wrapper = findByTestAttr(component, 'router_with_history')
    expect(wrapper.length).toBe(1)
  })

  it('Routers', () => {
    const wrapper0 = findByTestAttr(component, '/')
    expect(wrapper0.length).toBe(1)
    const wrapper1 = findByTestAttr(component, 'home')
    expect(wrapper1.length).toBe(1)
    const wrapper2 = findByTestAttr(component, 'login')
    expect(wrapper2.length).toBe(1)
    const wrapper3 = findByTestAttr(component, 'logout')
    expect(wrapper3.length).toBe(1)
    const wrapper4 = findByTestAttr(component, 'exam')
    expect(wrapper4.length).toBe(1)
  })

})

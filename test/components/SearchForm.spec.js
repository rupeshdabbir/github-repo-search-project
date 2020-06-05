import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';

import SearchForm from 'components/SearchForm';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: SearchForm', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.clearAllMocks();
  });

  it('should render as expected', () => {
    const component = renderer.create(<SearchForm onSubmit={jest.fn()} initialInputValue="" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when an initialInputValue prop is absent', () => {
    it('should set inputValue to an empty string', () => {
      const wrapper = shallow(<SearchForm onSubmit={jest.fn()} initialInputValue="" />);
      expect(wrapper.props().initialInputValue).toEqual(undefined);
    });
  });

  describe('when a different initialInputValue is set', () => {
    it('should update the state', () => {
      const wrapper = shallow(<SearchForm initialInputValue={'hello'} onSubmit={jest.fn()} />);
      const value = wrapper.find('#searchInput').props().value;
      expect(value).toEqual('hello');
    });
  });

  describe('when the form is submitted', () => {
    it('should pass the value to the onSubmit function', () => {
      const spy = jest.fn();
      const response = { dropdownValue: 'JavaScript', inputValue: 'angular+language:JavaScript' };
      const wrapper = shallow(<SearchForm onSubmit={spy} initialInputValue="angular+language:JavaScript" />);
      wrapper.simulate('submit', { preventDefault: (f) => f });
      expect(spy).toHaveBeenCalledWith(response);
    });
  });
});

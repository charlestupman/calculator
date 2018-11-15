import React from 'react'
import { shallow } from 'enzyme'
import { Operators } from './operators'

describe('screen component', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<Operators />)
	})
	it('should render in a div', () => {
		expect(wrapper.find('div').length).toBe(1)
	})
	it('should render 5 buttons', () => {
		expect(wrapper.find('Button').length).toBe(5)
	})
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})
})

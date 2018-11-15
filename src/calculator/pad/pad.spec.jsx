import React from 'react'
import { shallow } from 'enzyme'
import { Pad } from './pad'

describe('screen component', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<Pad />)
	})
	it('should render 3 divs', () => {
		expect(wrapper.find('div').length).toBe(3)
	})
	it('should import modifiers', () => {
		expect(wrapper.find('Modifiers').length).toBe(1)
	})
	it('should import Operators', () => {
		expect(wrapper.find('Operators').length).toBe(1)
	})
	it('should import Numbers', () => {
		expect(wrapper.find('Numbers').length).toBe(1)
	})
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})
})

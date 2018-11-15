import React from 'react'
import { shallow } from 'enzyme'
import { Modifiers } from './modifiers'

describe('screen component', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<Modifiers />)
	})
	it('should render in a div', () => {
		expect(wrapper.find('div').length).toBe(1)
	})
	it('should render 4 buttons', () => {
		expect(wrapper.find('Button').length).toBe(3)
	})
})

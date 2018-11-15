import React from 'react'
import { shallow } from 'enzyme'
import { Numbers } from './numbers'

describe('screen component', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<Numbers />)
	})
	it('should render in a div', () => {
		expect(wrapper.find('div').length).toBe(1)
	})
	it('should render 5 buttons', () => {
		expect(wrapper.find('Button').length).toBe(10)
	})
})

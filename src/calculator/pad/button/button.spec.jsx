import React from 'react'
import { shallow } from 'enzyme'
import { Button } from './button'

describe('screen component', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<Button />)
	})
	it('should render a div', () => {
		expect(wrapper.find('div').length).toBe(1)
	})
	it('should display character prop as text', () => {
		const mockCharacter = '+'
		wrapper = shallow(<Button character={mockCharacter} />)
		expect(wrapper.text()).toEqual(mockCharacter)
	})
	it('should fire operation when clicked', () => {
		const mockOperation = jest.fn()
		wrapper = shallow(<Button operator={mockOperation} />)
		wrapper.simulate('click')
		expect(mockOperation).toHaveBeenCalledTimes(1)
	})
})

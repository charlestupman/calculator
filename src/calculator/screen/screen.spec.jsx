import React from 'react'
import { shallow } from 'enzyme'
import { Screen } from './screen'

describe('screen component', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<Screen />)
	})
	it('should render a div', () => {
		expect(wrapper.find('div').length).toBe(1)
	})
	it('should display sreenValue prop as text', () => {
		const mockValue = 'mock value'
		wrapper = shallow(<Screen screenValue={mockValue} />)
		expect(wrapper.text()).toEqual(mockValue)
	})
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})
})

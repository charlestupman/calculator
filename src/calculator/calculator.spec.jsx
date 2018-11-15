import React from 'react'
import { mount, shallow } from 'enzyme'

import { Calculator } from './calculator'

const mockExecutableState = {
	screenValue: '75',
	stateValue: '25',
	operator: 'add',
}

describe('calculator', () => {
	let wrapper
	let instance
	beforeEach(() => {
		wrapper = shallow(<Calculator />)
		instance = new Calculator()
	})
	it('should display screen component', () => {
		expect(wrapper.find('Screen').length).toBe(1)
	})
	it('should display pad component', () => {
		expect(wrapper.find('Pad').length).toBe(1)
	})
	it('should be wrapped in a div', () => {
		expect(wrapper.find('div').length).toBe(1)
	})
	it('should have method for updating screen value', () => {
		expect(instance.updateScreenValue).toBeDefined()
	})
	it('should have method of adding operator', () => {
		expect(instance.addOperator).toBeDefined()
	})
	it('should have method of getting answer', () => {
		expect(instance.getAnswer).toBeDefined()
	})
	it('should have method for canelling operation', () => {
		expect(instance.cancel).toBeDefined()
	})
	it('should have method for making number negative', () => {
		expect(instance.makeNegative).toBeDefined()
	})
	it('should have method for making number a percent', () => {
		expect(instance.makePercent).toBeDefined()
	})
	describe('updateScreenValue', () => {
		it('should add new number to blank screenValue', () => {
			wrapper.instance().updateScreenValue('3')
			expect(wrapper.state()).toMatchObject({ screenValue: '3' })
		})
		it('should add new number to screenValue', () => {
			wrapper.instance().setState({ screenValue: '123', isNewNumber: false })
			wrapper.instance().updateScreenValue('4')
			expect(wrapper.state()).toMatchObject({ screenValue: '1234' })
		})
		it('should add to blank value post calculation or operator', () => {
			wrapper.instance().setState({ screenValue: '123', isNewNumber: true })
			wrapper.instance().updateScreenValue('4')
			expect(wrapper.state()).toMatchObject({ screenValue: '4', isNewNumber: false })
		})
	})
	describe('addOperator', () => {
		it('should add operator to state', () => {
			wrapper.instance().setState({ screenValue: '123' })
			wrapper.instance().addOperator('add')
			expect(wrapper.state()).toMatchObject({ operator: 'add' })
		})
		it('should only action if there is a screenValue', () => {
			wrapper.instance().addOperator('add')
			expect(wrapper.state()).not.toMatchObject({ operator: 'add' })
		})
		it('should set the state to the screenValue', () => {
			wrapper.instance().setState({ screenValue: '123' })
			wrapper.instance().addOperator('plus')
			expect(wrapper.state()).toMatchObject({ operator: 'plus', stateValue: '123' })
		})
		it('should let the screen know its ready for a new number', () => {
			wrapper.instance().setState({ screenValue: '123' })
			wrapper.instance().addOperator('plus')
			expect(wrapper.state()).toMatchObject({ isNewNumber: true })
		})
	})
	describe('getAnswer', () => {
		it('should only action if there is an operator', () => {
			expect(wrapper.instance().getAnswer()).toBe('')
		})
		beforeEach(() => {
			wrapper = mount(<Calculator />)
		})
		it('should execute sum if there is an operator', () => {
			wrapper.instance().setState(mockExecutableState)
			wrapper.instance().getAnswer()
			expect(wrapper.state()).toMatchObject({ screenValue: '100' })
		})
		it('should clear the operators and stateValues and set newNumber indicator', () => {
			wrapper.instance().setState(mockExecutableState)
			wrapper.instance().getAnswer()
			expect(wrapper.state()).toMatchObject({ stateValue: '', operator: '', isNewNumber: true })
		})
	})
	describe('cancel', () => {
		it('should reset all states ready for new calculation', () => {
			wrapper.instance().setState(mockExecutableState)
			wrapper.instance().cancel()
			expect(wrapper.state()).toMatchObject({
				screenValue: '', stateValue: '', operator: '', isNewNumber: true,
			})
		})
	})
	describe('makeNegative', () => {
		it('should turn make a positive number negative', () => {
			wrapper.instance().setState({ screenValue: '500' })
			wrapper.instance().makeNegative()
			expect(wrapper.state()).toMatchObject({ screenValue: '-500' })
		})
		it('should turn make a negative number positive', () => {
			wrapper.instance().setState({ screenValue: '-500' })
			wrapper.instance().makeNegative()
			expect(wrapper.state()).toMatchObject({ screenValue: '500' })
		})
		it('do nothing if no number present', () => {
			wrapper.instance().makeNegative()
			expect(wrapper.state()).toMatchObject({ screenValue: '' })
		})
	})
	describe('makePercent', () => {
		it('should turn a number into a percent (divide by 100)', () => {
			wrapper.instance().setState({ screenValue: '500' })
			wrapper.instance().makePercent()
			expect(wrapper.state()).toMatchObject({ screenValue: '5' })
		})
	})
})

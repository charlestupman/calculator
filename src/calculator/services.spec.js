import { operatorLibrary } from './services'

describe('operator library', () => {
	it('should add', () => {
		expect(operatorLibrary.add(1, 2)).toEqual(3)
	})
	it('should subtract', () => {
		expect(operatorLibrary.subtract(5, 2)).toEqual(3)
	})
	it('should multiply', () => {
		expect(operatorLibrary.multiply(3, 5)).toEqual(15)
	})
	it('should divide', () => {
		expect(operatorLibrary.divide(9, 3)).toEqual(3)
	})
})

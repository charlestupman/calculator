import React from 'react'
import ReactDOM from 'react-dom'
import { Pad } from './pad'
import { Screen } from './screen'
import { operatorLibrary } from './services'
import styles from './calculator.scss'
import logo from '../images/logo.svg'

export class Calculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			screenValue: '',
			stateValue: '',
			operator: '',
			isNewNumber: true,
		}
	}

	updateScreenValue = number => this.setState(prevState => ({
		screenValue: prevState.isNewNumber ? number : prevState.screenValue + number,
		isNewNumber: false,
	}))

	addOperator = (operator) => {
		const { screenValue } = this.state
		return screenValue && this.setState(prevState => ({
			operator,
			stateValue: prevState.screenValue,
			isNewNumber: true,
		}))
	}

	getAnswer = () => {
		const { operator } = this.state
		return operator && this.setState(
			prevState => ({
				stateValue: '',
				operator: '',
				screenValue: operatorLibrary[prevState.operator](prevState.stateValue, prevState.screenValue).toString(),
				isNewNumber: true,
			}),
		)
	}

	cancel = () => this.setState({
		screenValue: '',
		stateValue: '',
		operator: '',
		isNewNumber: true,
	})

	makeNegative = () => {
		const toggleNegative = (number) => {
			if (number === '') {
				return ''
			}
			return number.charAt(0) === '-' ? number.substring(1) : `-${number}`
		}
		return this.setState(
			prevState => ({
				screenValue: toggleNegative(prevState.screenValue).toString(),
			}),
		)
	}

	makePercent = () =>
		this.setState(
			prevState => ({
				screenValue: operatorLibrary.percent(prevState.screenValue).toString(),
			}),
		)

	render() {
		const { screenValue } = this.state
		return (
			<div className={styles.frame}>
				<img src={logo} alt="logo" />
				<Screen screenValue={screenValue} />
				<Pad
					updateScreenValue={this.updateScreenValue}
					addOperator={this.addOperator}
					getAnswer={this.getAnswer}
					cancel={this.cancel}
					makeNegative={this.makeNegative}
					makePercent={this.makePercent}
				/>
			</div>
		)
	}
}

const wrapper = document.getElementById('application')
wrapper && ReactDOM.render(<Calculator/>, wrapper) // eslint-disable-line

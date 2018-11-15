import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button'

import styles from './operators.scss'

export const Operators = ({ addOperator, getAnswer }) =>
	<div className={styles.operators}>
		<Button character="+" operator={() => addOperator('add')} type="operator" />
		<Button character="-" operator={() => addOperator('subtract')} type="operator" />
		<Button character="*" operator={() => addOperator('multiply')} type="operator" />
		<Button character="/" operator={() => addOperator('divide')} type="operator" />
		<Button character="=" operator={() => getAnswer()} type="operator" />
	</div>

Operators.propTypes = {
	addOperator: PropTypes.func,
	getAnswer: PropTypes.func,
}

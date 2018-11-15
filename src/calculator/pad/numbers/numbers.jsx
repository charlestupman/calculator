import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button'

import styles from './numbers.scss'

const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']

export const Numbers = ({ updateScreenValue }) =>
	<div className={styles.numbers}>
		{numbers.map(number =>
			<Button character={number} operator={() => updateScreenValue(number)} type="number" key={number} />)}
	</div>

Numbers.propTypes = {
	updateScreenValue: PropTypes.func,
}

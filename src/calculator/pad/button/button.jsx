import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.scss'

export const Button = ({ character, operator }) =>
	<div onClick={operator} className={styles.button} role="button" tabIndex="0">
		{character}
	</div>

Button.propTypes = {
	character: PropTypes.string,
	operator: PropTypes.func,
}

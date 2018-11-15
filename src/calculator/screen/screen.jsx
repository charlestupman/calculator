import React from 'react'
import PropTypes from 'prop-types'
import styles from './screen.scss'

export const Screen = ({ screenValue }) =>
	<div className={styles.screen}>
		{screenValue}
	</div>

Screen.propTypes = {
	screenValue: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
}

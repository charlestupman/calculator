import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button'

import styles from './modifiers.scss'

export const Modifiers = ({ cancel, makeNegative, makePercent }) =>
	<div className={styles.modifiers}>
		<Button operator={cancel} character="C" type="modifier" />
		<Button operator={makeNegative} character="+/-" type="modifier" />
		<Button operator={makePercent} character="%" type="modifier" />
	</div>

Modifiers.propTypes = {
	cancel: PropTypes.func,
	makeNegative: PropTypes.func,
	makePercent: PropTypes.func,
}

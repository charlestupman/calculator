import React from 'react'
import PropTypes from 'prop-types'
import { Numbers } from './numbers'
import { Operators } from './operators'
import { Modifiers } from './modifiers'

import styles from './pad.scss'

export const Pad = (
	{
		updateScreenValue,
		addOperator,
		getAnswer,
		cancel,
		makeNegative,
		makePercent,
	},
) =>
	<div className={styles.pad}>
		<div className={styles.leftButtons}>
			<Modifiers makeNegative={makeNegative} makePercent={makePercent} cancel={cancel} />
			<Numbers updateScreenValue={updateScreenValue} />
		</div>
		<div className={styles.rightButtons}>
			<Operators addOperator={addOperator} getAnswer={getAnswer} />
		</div>
	</div>

Pad.propTypes = {
	addOperator: PropTypes.func,
	getAnswer: PropTypes.func,
	cancel: PropTypes.func,
	makeNegative: PropTypes.func,
	makePercent: PropTypes.func,
	updateScreenValue: PropTypes.func,
}

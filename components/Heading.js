import React from 'react'
import { Text } from './system'
import { IconReveal } from './IconReveal'

export const Heading = props => (
	<Text
		onClick={props.onChange}
		width='100%'
		variant='s1'
		styling='caps'
		py={{ min: 4, sm: 6 }}
		ps='xsm'
		sx={{
			position: 'relative',
			borderBottom: `${props.isOpen ? '0px' : '1px solid'}`,
			borderColor: 'blacks.0',
			cursor: 'row-resize',
		}}
	>
		{props.children}
		<IconReveal isOpen={props.isOpen} />
	</Text>
)

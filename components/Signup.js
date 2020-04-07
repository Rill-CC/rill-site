import React, { useState } from 'react'
import { Flex, Input, Box } from './system'

const Button = props => (
	<Box
		as='button'
		px={{ min: 2, sm: 3 }}
		py={3}
		{...props}
		sx={{
			appearance: 'none',
			display: 'inline-block',
			textAlign: 'center',
			lineHeight: 'inherit',
			textTransform: 'uppercase',
			textDecoration: 'none',
			fontSize: 'inherit',
			color: 'inherit',
			bg: 'inherit',
			border: 0,
			borderRadius: 0,
			':hover': { color: 'blacks.3', cursor: 'pointer' },
			':active': {
				color: 'blacks.3',
			}
		}}
	/>
)

export const Signup = props => {

	const [value, setValue] = useState('')
	const handleChange = e => {
		setValue(e.target.value)
	}
	const [signedUp, setSignedUp] = useState(false)
	const handleSubmit = e => {
		e.preventDefault()
		fetch('https://rill.us19.list-manage.com/subscribe/post', {
			method: 'POST',
			mode: 'no-cors',
			body: new FormData(e.target),
		})
		.then(() => {
			setSignedUp(true)
			setValue('')
		})
	}

	return (
		<Flex
			width='100%'
			flexes='rsc'
			variant='text.s3'
			sx={{
				border: '1px solid',
				borderColor: 'blacks.1',
			}}
			{...props}
		>
			<Flex
				as='form'
				width='100%'
				flexes='rss'
				onSubmit={handleSubmit}
			>
				<Input
					type='hidden'
					name='u'
					defaultValue='674875605b0352c7d30f06785'
				/>
				<Input type='hidden' name='id' defaultValue='f79a7d6e40' />
				<Input
					type='email'
					autocapitalize='off'
					autocorrect='off'
					name='MERGE0'
					id='MERGE0'
					size='25'
					onChange={handleChange}
					value={value}
					placeholder='Get updates'
					px={{ min: 2, sm: 3 }}
					flexGrow='1'
				/>
				<Button type='submit' name='signup'>{signedUp ? 'Thanks' : 'Sign up'}</Button>
			</Flex>
		</Flex>
	)
}

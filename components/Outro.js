import { useRef, useState, useEffect } from 'react'
import { Flex, Text, Image, Input, Button } from './system'
import { Layout, Signup } from './bridge'

const Outro = props =>
	<Layout>
		<Text
			gridColumn={{ min: '1/-1', sm: '1/7' }}
			gridRow='1'
			bg='accent'
			p={{ min: 3, xsm: 4 }}
			flexes='css'
			variant='s1'
			sx={{
				borderBottom: '1px solid',
				borderColor: 'blacks.0',
			}}
		>
			If you find the project interesting, you can follow updates by subscribing to newsletter.
		</Text>

		<Flex
			gridColumn={{ min: '1/-1', sm: '1/7' }}
			gridRow='2'
			width='100%'
			flexes='cbs'
			px={3}
			bg='accent'
		>
				<Signup
				mt={{min: 8, md: 9}}
				mb={{min: 7, md: 8}}
			/>

			<Text
				width='100%'
				pb={3}
				variant='s4'
				color='blacks.3'
			>
				Updates about RILL project only.
			</Text>
		</Flex>

		<Text
			gridColumn={{ min: '1/-1', sm: '7/-1' }}
			gridRow={{ min: 3, sm: 1 }}
			bg='black'
			p={{ min: 3, xsm: 4 }}
			pb={{min: 8, xsm: 8, sm: 0}}
			variant='s1'
			color='accent'
			sx={{
				borderBottom: '1px solid',
				borderColor: 'whites.0'
			}}
		>
			Have a question?
		</Text>


		<Flex
			gridColumn={{ min: '1/-1', sm: '7/-1' }}
			gridRow={{ min: 4, sm: 2 }}
			px={3}
			flexes='cbs'
			bg='black'
		>
			<Button
				width='100%'
				mt={{min: 8, md: 9}}
				mb={{min: 7, md: 8}}
				bg='accent'
				color='black'
			>
				Contact
			</Button>

			<Text
				pb={3}
				variant='s4'
				color='transparent'
			>
			&ensp;
			</Text>
		</Flex>

	</Layout>

export default Outro
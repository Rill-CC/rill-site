import { useRef, useState, useEffect } from 'react'
import { Flex, Text, Image, Button } from './system'
import { C, Section } from './bridge'

import { QAItem } from './QAEls'

const QA = props => {

	const QAItemList = C.QA.map(item =>
		<QAItem
			key={item.id}
			title={item.title}
			desc={item.desc}
		/>
	)

	return (
		<Section heading='Q&A'>
			<Flex
				gridColumn={{ min: '1/-1', sm: '1/7' }}
			>
				{QAItemList}
			</Flex>
			
			<Flex
				gridColumn={{ min: '1/-1', sm: '7/-1' }}
				bg='accent'
				flexes='ccc'
			>
				<Flex
					p={{ min: 3, xsm: 4 }}
					pb={{min: 8, xsm: 8, sm: 0}}
					width='100%'
					height='50%'
					sx={{
						borderBottom: '1px solid',
						borderColor: 'blacks.0',
					}}
				>
					<Text variant='s2'>Have a question?</Text>
				</Flex>

				<Flex
					bg='accent'
					width='100%'
					height='50%'
					p={{ min: 3, xsm: 4 }}
					py={{min: 8, xsm: 8, sm: 0}}
				>
					<Flex
						flexes='ccc'
						width='100%'
					>
						<Button bg='black' color='accent' width='100%'>Contact</Button>
					</Flex>

			</Flex>

			</Flex>
		</Section>
		)
}

export default QA
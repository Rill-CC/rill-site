import React, { useState } from 'react'
import { Flex, Text } from './system'
import { C, Section } from './bridge'
import { Fig01, Fig02 } from './Figures.js'
import { Tab } from './HowEls.js'

export default function Utilities() {
	// Switch tabs
	const [activeTab, setActiveTab] = useState('Fig1')
	const handleTabs = e => setActiveTab(e.target.name)

	const StepList = C.How.steps.map(step =>
		<Text as='li'
			key={step.id}
			variant='s2'
			pb={3}
			sx={{
				':last-child': { pb: 0 }
			}}
		>
			{step.id}<br/>
			{step.desc}
		</Text>
		)
	
	return (
	<Section heading='How'>

		<Flex as='ul'
			gridColumn={{ min: '1/-1', sm: '1/7' }}
			ps='sm'
			flexes='css'
		>
			{StepList}
		</Flex>

		<Flex as='aside'
			gridColumn={{ min: '1/-1', sm: '7/-1' }}
			pb='100%'
			bg='accent'
			sx={{ position: 'relative' }}
		>
			<Flex
				flexes='ccc'
				sx={{
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					p: 'auto',
				}}
			>
				<Flex
					flexes='ccc'
					flexGrow='1'
					width='100%'
				>
					{activeTab === 'Fig1' && <Fig01 />}
					{activeTab === 'Fig2' && <Fig02 />}
				</Flex>
				
				<Flex
					flexes='css'
					width='100%'
					ps='sm'
				>
					<Tab
						name='Fig1'
						activeTab={activeTab}
						onChange={handleTabs}
						mb={1}
					>
						{C.How.figs[0].id}: {C.How.figs[0].desc}
					</Tab>
					<Tab
						name='Fig2'
						activeTab={activeTab}
						onChange={handleTabs}
					>
						{C.How.figs[1].id}: {C.How.figs[1].desc}
					</Tab>
				</Flex>
			</Flex>
	</Flex>

	</Section>
	)
}
import React from 'react'
import { Flex, Grid, Text } from './system'
import { C, Section } from './bridge'
import { IconTask } from './IconTask'

const Stages = () => {
	const StageItemList = C.Stages.map(item => (
		<React.Fragment key={item.id}>
			<Grid
				gridColumn={{ min: '1/-1', sm: '1/7' }}
				flexes='css'
				ps='ysm'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'blacks.0',
				}}
				gridTemplateColumns={{
					min: 'repeat(12, 1fr)',
					md: 'repeat(6, 1fr)',
				}}
			>
				<Flex
					gridColumn={{ min: '1/-1', xsm: '1/10', md: '1/4' }}
					flexes='css'
					pb={{ min: 4, sm: 0 }}
				>
					<Text pb={2} ps='xsm' variant='s3'>
						{item.title}
					</Text>
					<Text ps='xsm' variant='s3' color='blacks.3'>
						{item.desc}
					</Text>
				</Flex>
			</Grid>

			<Flex
				as='ul'
				gridColumn={{ min: '1/-1', sm: '7/-1' }}
				bg='accent'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'blacks.0',
				}}
			>
				<Flex
					flexes={{ min: 'css', sm: 'ccc' }}
					width='100%'
					py={{ min: 8, sm: 10 }}
				>
					{item.tasks.map(task => (
						<Text
							as='li'
							key={task.id}
							pb={1}
							ml={{ min: 6, sm: 0 }}
							width={{ min: 3 / 4, sm: 2 / 3 }}
							variant='s2'
							color={task.completed ? 'blacks.2' : 'blacks.4'}
							sx={{ position: 'relative' }}
						>
							<IconTask completed={task.completed} />
							{task.desc}
						</Text>
					))}
				</Flex>
			</Flex>
		</React.Fragment>
	))

	return (
		<Section heading='Stages' keepOpen={false}>
			{StageItemList}
		</Section>
	)
}

export default Stages

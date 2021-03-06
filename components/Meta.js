import React from 'react'
import Head from 'next/head'

export default function Meta() {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta name='Rill—Common Connections' />
			<meta
				name='description'
				content='An open platform that helps interconnect environmental events and track updates.'
			/>
			<meta name='keywords' content='science, research, education, network' />

			<meta property='og:image' content='https://rill.cc/images/thumb.jpg' />
			<meta property='image:width' content='1920' />
			<meta property='image:height' content='1080' />
			<meta property='og:title' content='Rill—Common Connections' />
			<meta
				property='og:description'
				content='An open platform that helps interconnect environmental events and track updates.'
			/>
			<meta property='og:url' content='https://rill.cc' />
			<meta property='og:type' content='website' />
			<link rel='icon' href='/images/fav.jpg' />
			<title>Rill—Common Connections</title>
		</Head>
	)
}

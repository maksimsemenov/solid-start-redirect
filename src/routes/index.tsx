import { Title } from '@solidjs/meta'
import { action, redirect } from '@solidjs/router'

import Counter from '~/components/Counter'

const loadData = () => {
	'use server'
	throw redirect('/about')
}

export const route = {
	load: () => loadData()
}

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>
			<h1>Hello world!</h1>
			<Counter />
			<p>
				Visit{' '}
				<a href="https://start.solidjs.com" target="_blank">
					start.solidjs.com
				</a>{' '}
				to learn how to build SolidStart apps.
			</p>
		</main>
	)
}

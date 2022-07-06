import Head from 'next/head'
import { Footer, Header, LastCategories, LastProducts, Nav } from '../components'
import { getLastProducts, getLastCategories } from '../services'

export default function Home({ dataP, dataC }) {
	return (
		<div className='font-Ubuntu'>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<Header />
			<main>
				<LastCategories categoryData={dataC} />
				<LastProducts ProductsData={dataP} />
			</main>
			<Footer />
		</div>
	)
}

export async function getStaticProps() {
	const dataP = (await getLastProducts()) || []
	const dataC = (await getLastCategories()) || []

	return {
		props: { dataP, dataC },
	}
}

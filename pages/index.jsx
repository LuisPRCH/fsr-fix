import { useWindowScrollPositions } from '../hooks/useWindowScrollPositions'
import Head from 'next/head'
import {
	Footer,
	Header,
	LastCategories,
	LastProducts,
	Nav,
	RedesWidget,
} from '../components'
import { getLastProducts, getLastCategories } from '../services'

export default function Home({ dataP, dataC }) {

	return (
		<div className='font-Ubuntu'>
			<Head>
				<title>Ferretería San Rafael - Todo para tu hogar</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Somos una empresa especializada en la venta de artículos de
					Ferretería, materiales para la construcción y toda clase de
					necesidades para el hogar.'
				/>
				<link rel='canonical' href='https://fsr-sepia.vercel.app' />
			</Head>
			<RedesWidget />
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

import {
	CardOfProduct,
	Footer,
	Header,
	Nav,
	NavFilter,
	RedesWidget
} from '../../components'
import { getAllCategories, getAllProducts } from '../../services'
import { motion } from 'framer-motion'

const catalogo = ({ dataP, allC }) => {
	return (
		<>
			<RedesWidget />
			<Nav />
			<Header title='Catálogo' subTitle='Catálogo' size='text-8xl' />
			<motion.main
				animate={{ opacity: [0, 1], y: [50, 0] }}
				className='mt-8 opacity-0 w-full flex flex-col justify-start items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0'
			>
				<NavFilter cartegoriesToMake={allC} />
				<section className='mb-8 px-8 flex flex-wrap w-full justify-center items-center gap-8'>
					<CardOfProduct cardToMake={dataP} pagination={true} />
				</section>
			</motion.main>
			<Footer />
		</>
	)
}

export async function getStaticProps() {
	const dataP = (await getAllProducts()) || []
	const dataC = (await getAllCategories()) || []
	const nameSlug = dataC.map(tag => {
		return { nombre: tag.node.nombre, slug: tag.node.slug, id: tag.node.id }
	})
	return {
		props: { dataP, allC: nameSlug }
	}
}

export default catalogo

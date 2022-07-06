import { getAllCategories } from '../../services'
import { motion } from 'framer-motion'
import { CardOfProduct, Footer, Nav, NavFilter, Header } from '../../components'

const catalogo = ({ dataC, allC }) => {
	console.log(dataC.productos)
	return (
		<>
			<Nav />
			<Header title={dataC.nombre} subTitle={dataC.nombre} />
			<motion.main
				animate={{ opacity: [0, 1], y: [50, 0] }}
				className='opacity-0 w-full flex flex-col justify-start items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0'
			>
				<NavFilter cartegoriesToMake={allC} />
				<section className='mb-8 px-8 flex flex-wrap w-full justify-center items-center gap-8'>
					<CardOfProduct cardToMake={dataC.productos} node={false} />
				</section>
			</motion.main>
			<Footer />
		</>
	)
}

export async function getStaticPaths() {
	const dataC = (await getAllCategories()) || []
	const paths = dataC.map(category => {
		return {
			params: {
				slug: category.node.slug,
			},
		}
	})
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const dataC = (await getAllCategories()) || []
	const categorySlug = params.slug
	const categoryFill = dataC.filter(
		category => category.node.slug === categorySlug
	)
	const nameSlug = dataC.map(tag => {
		return { nombre: tag.node.nombre, slug: tag.node.slug, id: tag.node.id }
	})
	return {
		props: {
			dataC: categoryFill[0].node,
			allC: nameSlug,
		},
	}
}

export default catalogo

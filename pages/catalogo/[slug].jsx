import { getAllProducts } from '../../services'
import { motion } from 'framer-motion'
import {
	CardOfProduct,
	Footer,
	Nav,
	RedesWidget,
	Tags,
	TitleOfSection
} from '../../components'
import Image from 'next/image'

const catalogo = ({ dataP, ramdon }) => {
	return (
		<>
			<RedesWidget />
			<header>
				<Nav scroll={false} />
			</header>
			<motion.main
				animate={{ opacity: [0, 1], y: [50, 0] }}
				className='opacity-0 px-8 pt-32 min-h-screen w-full flex flex-col gap-8 lg:px-3'
			>
				<div className='flex flex-col justify-start items-center md:flex-row-reverse md:items-start md:justify-center'>
					<div className='flex flex-col bg-slate-100 w-full max-w-[700px] rounded-lg'>
						<section className='w-full max-w-[700px] flex items-center justify-between p-8 flex-col gap-8 lg:flex-row lg:gap-0 lg:h-[170px]'>
							<div className='flex justify-center items-center'>
								<h3 className='text-[#333] text-2xl border-b-[1px] border-gray-300'>{`₡ ${dataP.precio} i.v.a`}</h3>
							</div>
							<div className='flex flex-col justify-center items-start gap-4'>
								<Tags tagsToMake={dataP.categorias} />
								<div className='text-center flex w-full items-center gap-2'>
									<h2 className='text-xl text-[#333]'>{dataP.nombre}</h2>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='#0099ff'
										viewBox='0 0 24 24'
									>
										<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z' />
									</svg>
								</div>
								<p className='text-xs text-[#999]'>
									AÑADIDO EL {dataP.publicado}
								</p>
							</div>
						</section>
						<section
							className='p-8 w-full max-w-[700px] hidden border-t-[1px] border-gray-300 text-[#333] md:block'
							dangerouslySetInnerHTML={{
								__html: `${dataP.descripcion.html}`
							}}
						/>
					</div>
					<section className='w-full max-w-[700px] min-h-[10rem] flex justify-center items-center'>
						<Image
							width={dataP.imagen.width}
							height={dataP.imagen.height}
							className='h-full max-h-[500px]'
							src={dataP.imagen.url}
							alt={dataP.nombre}
						/>
					</section>
					<section
						className='p-4 w-full max-w-[700px] border-gray-300 bg-slate-100 rounded-lg text-[#333] md:hidden'
						dangerouslySetInnerHTML={{
							__html: `${dataP.descripcion.html}`
						}}
					/>
				</div>
				<section className='w-full min-h-[500px] p-8 flex flex-col justify-start items-center gap-8'>
					<TitleOfSection title='Recomendados' />
					<article className='flex flex-wrap w-full justify-center items-center gap-8'>
						<CardOfProduct cardToMake={ramdon} />
					</article>
				</section>
			</motion.main>
			<Footer />
		</>
	)
}

export async function getStaticPaths() {
	const dataP = (await getAllProducts()) || []
	const paths = dataP.map(product => {
		return {
			params: {
				slug: product.node.slug
			}
		}
	})

	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const dataP = (await getAllProducts()) || []
	const prosuctSlug = params.slug
	const productFill = dataP.filter(product => product.node.slug === prosuctSlug)

	const ramdon = [
		dataP[Math.floor(Math.random() * dataP.length)],
		dataP[Math.floor(Math.random() * dataP.length)],
		dataP[Math.floor(Math.random() * dataP.length)]
	]

	return {
		props: {
			dataP: productFill[0].node,
			ramdon
		}
	}
}

export default catalogo

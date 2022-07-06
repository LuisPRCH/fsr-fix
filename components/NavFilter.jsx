import Link from 'next/link'
import { motion } from 'framer-motion'
import { TitleOfSection, Tags } from '.'

const NavFilter = ({ cartegoriesToMake }) => {
	return (
		<section className='px-8 gap-8 flex flex-col-reverse justify-center items-center md:sticky top-[122px] mb-8'>
			<article className='flex flex-col gap-4 justify-center items-center p-4 min-h-[10rem] w-full bg-slate-100 rounded-lg'>
				<TitleOfSection title='Categorías' />
				<Tags tagsToMake={cartegoriesToMake} />
			</article>
			<article className='flex flex-col gap-4 justify-center items-center p-4 min-h-[10rem] w-full bg-slate-100 rounded-lg'>
				<TitleOfSection title='Contáctenos' />
				<div className='text-center'>
					<p>¿Desea ser atendido de forma preferente?</p>
					<p className='font-medium'>¡NO PIERDA EL TIEMPO, LLÁMENOS YA!</p>
				</div>
				<Link href='#'>
					<motion.a
						whileHover={{ y: -3, scale: 1.05 }}
						className='cursor-pointer px-8 py-1 bg-[#e83d42] rounded-lg text-white font-bold'
					>
						AQUÍ
					</motion.a>
				</Link>
			</article>
		</section>
	)
}

export default NavFilter

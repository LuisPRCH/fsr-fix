import { motion } from 'framer-motion'
import Link from 'next/link'

const Tags = ({ tagsToMake }) => {
	return (
		<ul className='w-full flex flex-wrap gap-x-2 gap-y-4 justify-center items-center'>
			{tagsToMake.map(tag => {
				return (
					<motion.li whileHover={{ y: -3 }} key={tag.id}>
						<Link href={`/categoria/${tag.slug}`}>
							<a className='font-light text-sm tracking-[1px] px-[0.75rem] py-[0.375rem] rounded-3xl bg-[#07245616] text-[#333] transition-colors hover:bg-[#e83d42] hover:text-white cursor-pointer'>
								{tag.nombre}
							</a>
						</Link>
					</motion.li>
				)
			})}
		</ul>
	)
}

export default Tags

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const CardOfCategory = ({ cardToMake }) => {
	return (
		<>
			{cardToMake.map(category => {
				return (
					<motion.div
						key={category.node.id}
						whileHover={{ y: -5 }}
						animate={{ opacity: 1 }}
						className='opacity-0 relative w-[360px] h-[460px] rounded-md overflow-hidden'
					>
						<Link href={`/categoria/${category.node.slug}`}>
							<div className='relative w-full h-full rounded-md bg-gradient-to-b from-[#00000033] to-[#0d489966] flex justify-start items-end px-8 pb-12 cursor-pointer'>
								<h4 className='text-white text-3xl font-medium'>
									{category.node.nombre}
								</h4>
								<Image
									src={category.node.imagen.url}
									alt={category.node.nombre}
									layout='fill'
									className='absolute top-0 left-0 w-full h-full object-cover z-[-10]'
								/>
							</div>
						</Link>
					</motion.div>
				)
			})}
		</>
	)
}

export default CardOfCategory

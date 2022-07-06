import { motion } from 'framer-motion'

const TitleOfSection = ({ title }) => {
	return (
		<motion.div
			animate={{ y: [10, 0], opacity: [0, 1] }}
			className='opacity-0 text-center w-full flex flex-col justify-center items-center gap-4'
		>
			<span className='w-12 h-1 bg-[#e83d42]' />
			<h2 className='text-3xl text-[#333]'>{title}</h2>
		</motion.div>
	)
}

export default TitleOfSection

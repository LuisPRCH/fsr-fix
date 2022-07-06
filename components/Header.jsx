import { motion } from 'framer-motion'

const Header = ({
	title = 'Toda clase de necesidades para el hogar en un mismo lugar.',
	slogan = 'Ferretería San Rafael. Todo para tu hogar',
	subTitle = 'Ferretería San Rafael',
	subSlogan = 'Todo para tu hogar',
}) => {
	return (
		<header className="mt-[110px] relative flex justify-center items-center bg-[url('https://media.graphassets.com/T04RbgjzSsScg07fziCF')] bg-cover bg-left w-full h-[250px] md:mt-[90px] md:h-[400px] ">
			<motion.div
				animate={{ opacity: [0, 1] }}
				className='opacity-0 w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#00000099] to-[#00000099] flex justify-center items-center px-8'
			>
				<motion.h1
					animate={{ y: [-10, 0], opacity: [0, 1] }}
					className='hidden opacity-0 text-gray-50 text-center flex-col gap-4 text-4xl font-medium md:flex md:text-5xl'
				>
					{title}
					<span className='text-2xl font-normal'>{slogan}</span>
				</motion.h1>
				<motion.h1
					animate={{ y: [-10, 0], opacity: [0, 1] }}
					className='flex opacity-0 text-gray-50 text-center flex-col gap-4 text-4xl font-medium md:hidden'
				>
					{subTitle}
					<span className='text-2xl font-normal'>{subSlogan}</span>
				</motion.h1>
			</motion.div>
		</header>
	)
}

export default Header

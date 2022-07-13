import { motion } from 'framer-motion'
import Link from 'next/link'

const HeaderHome = () => {
	return (
		<header className="relative flex justify-center items-center bg-[url('https://media.graphassets.com/T04RbgjzSsScg07fziCF')] bg-cover bg-left w-full h-[400px] md:h-[500px]">
			<motion.div
				animate={{ opacity: [0, 1] }}
				className='px-8 opacity-0 pt-[70px] w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#00000099] to-[#00000099] flex justify-center flex-col gap-12 items-center lg:px-44'
			>
				<motion.h1
					animate={{ y: [-10, 0], opacity: [0, 1] }}
					className='flex opacity-0 text-gray-50 text-center flex-col gap-4 font-medium text-5xl md:hidden'
				>
					San Rafael
					<span className='text-2xl font-normal'>Todo para tu hogar</span>
				</motion.h1>
				<motion.h1
					animate={{ y: [-10, 0], opacity: [0, 1] }}
					className='hidden opacity-0 text-gray-50 text-center flex-col gap-8 font-medium text-3xl sm:text-4xl md:flex xl:text-5xl'
				>
					Toda clase de necesidades para el hogar <br/> En un mismo lugar
					<span className='text-2xl font-normal'>Ferretería San Rafael - Todo para tu hogar</span>
				</motion.h1>
        <motion.button
						animate={{ y: [-10, 0], opacity: [0, 1] }}
						className='opacity-0'
					>
						<Link href='/catalogo'>
							<a className='bg-[#e83d42] px-8 py-3 font-medium text-xl rounded-lg text-gray-100'>
								Ver Catálogo
							</a>
						</Link>
					</motion.button>
			</motion.div>
		</header>
	)
}

export default HeaderHome

import { motion } from 'framer-motion'
import Link from 'next/link'
import LogoSVG from './LogoSVG'

const Nav = () => {
	return (
		<nav className='flex-col bg-gray-50 flex gap-1 w-full h-[110px] justify-center items-center px-8 absolute top-0 left-0 md:flex-row md:justify-between md:h-[90px] md:fixed z-[1000]'>
			<Link passHref href='/'>
				<motion.a animate={{ y: [-10, 0], opacity: [0, 1] }} className='opacity-0'>
					<LogoSVG />
				</motion.a>
			</Link>
			<motion.ul
				animate={{ y: [10, 0], opacity: [0, 1] }}
				className='opacity-0 flex gap-4'
			>
				<li className='cursor-pointer'>
					<Link className='text-[#333]' href='/'>
						<a>Inicio</a>
					</Link>
				</li>
				<li className='cursor-pointer'>
					<Link className='text-[#333]' href='/catalogo'>
						<a>Catálogo</a>
					</Link>
				</li>
				<li className='cursor-pointer'>
					<Link className='text-[#333]' href='/contacto'>
						<a>Contáctanos</a>
					</Link>
				</li>
			</motion.ul>
		</nav>
	)
}

export default Nav

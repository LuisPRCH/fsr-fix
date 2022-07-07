import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LogoSVG } from '.'
import { useWindowScrollPositions } from '../hooks/useWindowScrollPositions'

const Nav = ({ scroll = true }) => {
	const { scrollY } = useWindowScrollPositions()
	const [classNav, setClassNav] = useState('bg-transparent md:h-[70px]')
	const [classLink, setClassLink] = useState('text-gray-100')
	useEffect(() => {
		if (scrollY >= 300) {
			setClassNav('bg-gray-100 md:h-[90px]')
			setClassLink('text-gray-900')
		} else {
			setClassNav('bg-transparent md:h-[80px]')
			setClassLink('text-gray-100')
		}
	}, [scrollY])

	return (
		<>
			{scroll ? (
				<nav
					className={
						'flex-col flex gap-1 w-full h-[110px] justify-center items-center px-8 absolute top-0 left-0 md:flex-row md:justify-between md:fixed z-[1000] duration-200 ease-in-out ' +
						classNav
					}
				>
					<Link passHref href='/'>
						<motion.a
							animate={{ y: [-10, 0], opacity: [0, 1] }}
							className='opacity-0'
						>
							{scrollY >= 300 ? (
								<LogoSVG color1='#233978' color2='#e63642' />
							) : (
								<LogoSVG />
							)}
						</motion.a>
					</Link>
					<motion.ul
						animate={{ y: [10, 0], opacity: [0, 1] }}
						className='opacity-0 flex gap-4'
					>
						<li className='cursor-pointer'>
							<Link href='/'>
								<a className={classLink}>Inicio</a>
							</Link>
						</li>
						<li className='cursor-pointer'>
							<Link href='/catalogo'>
								<a className={classLink}>Catálogo</a>
							</Link>
						</li>
						<li className='cursor-pointer'>
							<Link href='/contacto'>
								<a className={classLink}>Contáctanos</a>
							</Link>
						</li>
					</motion.ul>
				</nav>
			) : (
				<nav className='flex-col flex gap-1 w-full h-[110px] justify-center items-center px-8 absolute top-0 left-0 md:flex-row md:justify-between md:fixed z-[1000] duration-200 ease-in-out bg-gray-100 md:h-[90px]'>
					<Link passHref href='/'>
						<motion.a
							animate={{ y: [-10, 0], opacity: [0, 1] }}
							className='opacity-0'
						>
							<LogoSVG color1='#233978' color2='#e63642' />
						</motion.a>
					</Link>
					<motion.ul
						animate={{ y: [10, 0], opacity: [0, 1] }}
						className='opacity-0 flex gap-4'
					>
						<li className='cursor-pointer'>
							<Link href='/'>
								<a className='text-gray-900'>Inicio</a>
							</Link>
						</li>
						<li className='cursor-pointer'>
							<Link href='/catalogo'>
								<a className='text-gray-900'>Catálogo</a>
							</Link>
						</li>
						<li className='cursor-pointer'>
							<Link href='/contacto'>
								<a className='text-gray-900'>Contáctanos</a>
							</Link>
						</li>
					</motion.ul>
				</nav>
			)}
		</>
	)
}

export default Nav

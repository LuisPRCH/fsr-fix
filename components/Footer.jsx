import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='text-center lg:text-left bg-gray-100 text-[#333]'>
			<section className='flex justify-center items-center gap-6 w-full h-12 border-b border-gray-300'>
				<Link href='https://es-la.facebook.com/FerreteriaSnRafael/'>
					<a target='_blank' className='text-[#333]'>
						<svg
							className='w-2.5'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 320 512'
						>
							<path
								fill='currentColor'
								d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
							></path>
						</svg>
					</a>
				</Link>
				<Link href='https://goo.gl/maps/bKiFBN5uujv4FTVbA'>
					<a target='_blank' className='text-[#333]'>
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='fab'
							data-icon='google'
							className='w-5'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 488 512'
						>
							<path
								fill='#2F2012'
								d='M493.5,288.5l-41-144.4l-10.1-35.6l-33.9,15.1l-60.7,27.2l-86.5-32.7l-11.3-4.3l-11.3,4.3l-86.5,32.7 l-60.7-27.2l-33.9-15.1l-10.1,35.6l-41,144.4l-6.7,23.3l20.5,12.7l93.3,57.8l14.9,9.2l15.7-7.6l105.6-50.2l105.6,50.2l15.7,7.6 l14.9-9.2l93.3-57.8l20.5-12.7L493.5,288.5z M115.1,345.3l-77.5-48.1l41-144.4l55.5,24.9L115.1,345.3z M234,305.8l-87,41.4l19-167.3l68-25.7L234,305.8L234,305.8z M266,305.8V154.2l65.5,24.7l19,167L266,305.8z M382.7,346.7l-19-167.8l57.9-25.9l41,144.4L382.7,346.7z'
							/>
						</svg>
					</a>
				</Link>
				<Link href='https://wa.link/6zvclj'>
					<a target='_blank' className='text-[#333]'>
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='fab'
							data-icon='instagram'
							className='w-4'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
						>
							<path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z' />
						</svg>
					</a>
				</Link>
			</section>
			<section className='grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-24 py-4'>
				<article className='flex flex-col gap-4 justify-start items-center lg:items-start'>
					<h6 className='uppercase font-semibold flex justify-center'>
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='cubes'
							className='w-4 mr-3'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path
								fill='currentColor'
								d='M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z'
							></path>
						</svg>
						Sobre Nosotros
					</h6>
					<p className='text-left max-w-[300px]'>
						Somos una empresa especializada en la venta de artículos de
						Ferretería, materiales para la construcción y toda clase de
						necesidades para el hogar.
					</p>
				</article>
				<article className='flex flex-col gap-4 justify-start items-center lg:items-start'>
					<h6 className='uppercase font-semibold'>Servicios</h6>
					<div className='flex flex-col gap-3'>
						<p className='text-[#333]'>Herramientas Eléctricas</p>
						<p className='text-[#333]'>Cerrajeria</p>
						<p className='text-[#333]'>Fontanería</p>
						<p className='text-[#333]'>Agregados</p>
					</div>
				</article>
				<article className='flex flex-col gap-4 justify-start items-center lg:items-start'>
					<h6 className='uppercase font-semibold'>Links Utiles</h6>
					<div className='flex flex-col gap-3'>
						<Link href='/catalogo'>
							<a className='text-[#333]'>Catálogo</a>
						</Link>
						<Link href='#!'>
							<a className='text-[#333]'>Destacados</a>
						</Link>
						<Link href='/'>
							<a className='text-[#333]'>Inicio</a>
						</Link>
					</div>
				</article>
				<article className='flex flex-col gap-4 justify-start items-center lg:items-start'>
					<h6 className='uppercase font-semibold'>Contacto</h6>
					<div className='flex flex-col gap-3'>
						<Link href='https://goo.gl/maps/bKiFBN5uujv4FTVbA'>
							<a
								target='_blank'
								className='flex items-center justify-center md:justify-start'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='home'
									className='w-[1.2rem] mr-4'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 576 512'
								>
									<path
										fill='currentColor'
										d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'
									></path>
								</svg>
								San Rafael, San José Province
							</a>
						</Link>
						<p className='flex items-center justify-center md:justify-start'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='envelope'
								className='w-4 mr-4'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
							>
								<path
									fill='currentColor'
									d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
								></path>
							</svg>
							ventas@ferresanrafael.com
						</p>
						<p className='flex items-center justify-center md:justify-start'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='phone'
								className='w-4 mr-4'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
							>
								<path
									fill='currentColor'
									d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
								></path>
							</svg>
							(+506) 2273-8784
						</p>
						<Link href='https://wa.link/6zvclj'>
							<a
								target='_blank'
								className='flex items-center justify-center md:justify-start'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='phone'
									className='w-5 mr-4'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
								>
									<path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z' />
								</svg>
								(+506) 8709-9443
							</a>
						</Link>
					</div>
				</article>
			</section>
			<section className='text-center p-6 bg-gray-200'>
				<span>© 2022 Copyright: </span>
				<Link passHref href='/'>
					<a className='text-[#333] font-semibold'>Ferretería San Rafael</a>
				</Link>
			</section>
		</footer>
	)
}

export default Footer

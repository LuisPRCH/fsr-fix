import Spinner from '../public/Spinner.gif'
import Image from 'next/image'

const LoaderSVG = () => {
	return (
		<div className='absolute top-0 left-0 w-full h-screen flex justify-center items-center'>
			<Image src={Spinner.src} width={Spinner.width} height={Spinner.height} alt='Ferreteria San Rafael Spinner' />
		</div>
	)
}

export default LoaderSVG

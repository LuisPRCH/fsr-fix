import { useEffect, useState } from 'react'
import { LoaderSVG } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	const [loader, setLoader] = useState(false)
	useEffect(() => {
		setTimeout(() => setLoader(true), 500)
	}, [])

	return <>{loader ? <Component {...pageProps} /> : <LoaderSVG/>}</>
}

export default MyApp

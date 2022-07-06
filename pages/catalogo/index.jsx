import Link from 'next/link'
import { getAllProducts } from '../../services'

const catalogo = ({ dataP }) => {
	return (
		<>
			<div>
				{dataP.map(product => {
					return (
						<Link href={`/catalogo/${product.node.slug}`}>
							<p>{product.node.nombre}</p>
						</Link>
					)
				})}
			</div>
		</>
	)
}

export async function getStaticProps() {
	const dataP = (await getAllProducts()) || []
	return {
		props: { dataP },
	}
}

export default catalogo

import { CardOfProduct, TitleOfSection } from '.'

const LastProducts = ({ ProductsData }) => {
	return (
		<section className='w-full min-h-[500px] p-8 flex flex-col justify-start items-center gap-8'>
			<TitleOfSection title='Categorías Frecuente' />
			<article className='flex flex-wrap w-full justify-center items-center gap-8'>
				<CardOfProduct cardToMake={ProductsData} />
			</article>
		</section>
	)
}

export default LastProducts

import { CardOfCategory, TitleOfSection } from '.'

const LastCategories = ({ categoryData }) => {
	return (
		<section className='w-full min-h-[576px] px-8 py-8 flex flex-col justify-start items-center gap-8 xl:px-44'>
			<TitleOfSection title='Categorías Frecuente' />
			<article className='flex flex-wrap w-full justify-center items-center gap-8'>
				<CardOfCategory cardToMake={categoryData} />
			</article>
		</section>
	)
}

export default LastCategories

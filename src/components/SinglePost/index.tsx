import { postRepository } from '@/repositories/post';
import { formatDate } from '@/utils/formatDate';
import { CoverImage } from '../CoverImage';
import { Heading } from '../Heading';
import clsx from 'clsx';

export const SinglePost = async () => {
	const [idFirstPost] = await postRepository.findAll();
	const singlePost = await postRepository.findById(idFirstPost.id);

	return (
		<section
			className={clsx(
				['grid', 'grid-cols-1', 'gap-5', 'mb-12', 'group'],
				['sm:grid-cols-2 sm:justify-center'],
			)}
		>
			<CoverImage
				type='mainPost'
				href={'#'}
				src={singlePost.coverImageUrl}
				alt={singlePost.title}
			/>

			<div className='flex flex-col gap-3 sm:justify-center sm:gap-5'>
				<time
					className='text-sm/tight text-slate-600'
					dateTime={singlePost.createdAt}
				>
					{formatDate(singlePost.createdAt)}
				</time>
				<Heading url='#' as='h1'>
					{singlePost.title}
				</Heading>
				<div className='text-justify'>{singlePost.excerpt}</div>
			</div>
		</section>
	);
};

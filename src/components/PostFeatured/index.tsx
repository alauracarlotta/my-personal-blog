import { postRepository } from '@/repositories/post';
import { CoverImage } from '../CoverImage';
import { MainContent } from '../MainContent';
import clsx from 'clsx';

export const PostFeatured = async () => {
	const [idFirstPost] = await postRepository.findAll();
	const postFeatured = await postRepository.findById(idFirstPost.id);
	const postLink = `/post/${postFeatured.slug}`;

	return (
		<section
			className={clsx(
				['grid', 'grid-cols-1', 'gap-5', 'mb-12'],
				['sm:grid-cols-2 sm:justify-center'],
			)}
		>
			<div className='group w-full h-full overflow-hidden rounded-xl'>
				<CoverImage
					type='mainPost'
					href={postLink}
					src={postFeatured.coverImageUrl}
					alt={postFeatured.title}
				/>
			</div>

			<MainContent
				typePost='postFeatured'
				date={postFeatured.createdAt}
				url={postLink}
				as='h1'
				title={postFeatured.title}
				content={postFeatured.excerpt}
			/>
		</section>
	);
};

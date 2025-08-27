import { findAllPublicPostsCached } from '@/libs/post/queries/public';
import { CoverImage } from '../CoverImage';
import { MainContent } from '../MainContent';
import clsx from 'clsx';

export const PostFeatured = async () => {
	const posts = await findAllPublicPostsCached();

	const post = posts[0];
	const postLink = `/post/${post.slug}`;

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
					src={post.coverImageUrl}
					alt={post.title}
				/>
			</div>

			<MainContent
				typePost='postFeatured'
				date={post.createdAt}
				url={postLink}
				as='h1'
				title={post.title}
				content={post.excerpt}
			/>
		</section>
	);
};

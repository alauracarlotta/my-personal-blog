import { postRepository } from '@/repositories/post';
import { CoverImage } from '../CoverImage';
import { MainContent } from '../MainContent';
import clsx from 'clsx';

export const PostsList = async () => {
	const posts = await postRepository.findAll();
	const postsCopy = [...posts];
	postsCopy.shift();

	return (
		<div>
			<section
				className={clsx(
					['grid', 'grid-cols-1', 'gap-5', 'mb-12'],
					['sm:grid-cols-2'],
					['md:grid-cols-3'],
				)}
			>
				{postsCopy.map((post) => {
					const postLink = `/post/${post.slug}`;
					return (
						<div key={post.id}>
							<div className='group'>
								<CoverImage
									type='gridPost'
									href={postLink}
									src={post.coverImageUrl}
									alt={post.title}
								/>
							</div>

							<MainContent
								typePost='postList'
								date={post.createdAt}
								url={postLink}
								as='h2'
								title={post.title}
								content={post.excerpt}
							/>
						</div>
					);
				})}
			</section>
		</div>
	);
};
